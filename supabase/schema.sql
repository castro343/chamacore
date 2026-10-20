-- ChamaCore initial schema for foundation stage
-- Safe defaults: all sensitive access controlled through Supabase RLS policies.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  country text default 'Kenya',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.group_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member',
  status text not null default 'active',
  created_at timestamptz default now(),
  unique(group_id, user_id)
);

create table if not exists public.financial_records (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  type text not null check (type in ('contribution', 'expense', 'payout')),
  amount numeric(12,2) not null default 0,
  currency text not null default 'KES',
  reference text,
  recorded_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.financial_records enable row level security;

create policy "Profiles visible only to self"
on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile"
on public.profiles for insert with check (auth.uid() = id);

create policy "Group members can view their groups"
on public.groups for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.groups.id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Users can create groups"
on public.groups for insert with check (auth.uid() = created_by);

create policy "Group members can view memberships"
on public.group_members for select using (user_id = auth.uid() or exists (
    select 1 from public.group_members admin
    where admin.group_id = public.group_members.group_id and admin.user_id = auth.uid() and admin.role in ('chairperson', 'group_admin', 'treasurer')
));

create policy "Members can insert their own group membership request"
on public.group_members for insert with check (user_id = auth.uid());

create policy "Group members can view financial records in their groups"
on public.financial_records for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.financial_records.group_id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Treasurers and admins can create financial records"
on public.financial_records for insert with check (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.financial_records.group_id and gm.user_id = auth.uid() and gm.status = 'active' and gm.role in ('treasurer', 'group_admin', 'chairperson')
  )
);
