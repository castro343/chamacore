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
  location text default 'Kenya',
  status text not null default 'active' check (status in ('active', 'pending', 'archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.group_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('member', 'group_admin', 'treasurer', 'chairperson', 'auditor', 'platform_admin')),
  status text not null default 'active' check (status in ('active', 'pending', 'archived')),
  created_at timestamptz default now(),
  unique(group_id, user_id)
);

create table if not exists public.contributions (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  member_id uuid not null references auth.users(id) on delete cascade,
  amount numeric(12,2) not null default 0,
  contribution_type text not null default 'monthly' check (contribution_type in ('monthly', 'weekly', 'one_time', 'project', 'emergency', 'assessment')),
  status text not null default 'recorded' check (status in ('recorded', 'verified', 'pending', 'rejected')),
  currency text not null default 'KES',
  reference text,
  created_at timestamptz default now()
);

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  title text not null,
  amount numeric(12,2) not null default 0,
  category text default 'general',
  created_by uuid references auth.users(id),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz default now()
);

create table if not exists public.approvals (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  entity_type text not null check (entity_type in ('contribution', 'expense', 'payout', 'vote')),
  entity_id uuid not null,
  requested_by uuid references auth.users(id),
  approved_by uuid references auth.users(id),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  notes text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.contributions enable row level security;
alter table public.expenses enable row level security;
alter table public.approvals enable row level security;

create policy "Profiles are viewable only by owner"
on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
on public.profiles for update using (auth.uid() = id);
create policy "Users can insert their own profile"
on public.profiles for insert with check (auth.uid() = id);

create policy "Members can view groups they belong to"
on public.groups for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.groups.id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Users can create groups"
on public.groups for insert with check (auth.uid() = created_by);

create policy "Members can view their memberships"
on public.group_members for select using (
  user_id = auth.uid()
  or exists (
    select 1 from public.group_members admin
    where admin.group_id = public.group_members.group_id
      and admin.user_id = auth.uid()
      and admin.role in ('group_admin', 'chairperson', 'treasurer')
  )
);

create policy "Users can join groups as themselves"
on public.group_members for insert with check (user_id = auth.uid());

create policy "Members can view contributions in their group"
on public.contributions for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.contributions.group_id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Treasurers and admins can add contributions"
on public.contributions for insert with check (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.contributions.group_id and gm.user_id = auth.uid() and gm.status = 'active'
      and gm.role in ('treasurer', 'group_admin', 'chairperson')
  )
);

create policy "Members can view expenses in their group"
on public.expenses for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.expenses.group_id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Treasurers and admins can create expenses"
on public.expenses for insert with check (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.expenses.group_id and gm.user_id = auth.uid() and gm.status = 'active'
      and gm.role in ('treasurer', 'group_admin', 'chairperson')
  )
);

create policy "Group members can view approvals in their group"
on public.approvals for select using (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.approvals.group_id and gm.user_id = auth.uid() and gm.status = 'active'
  )
);

create policy "Approvers can create approval records"
on public.approvals for insert with check (
  exists (
    select 1 from public.group_members gm
    where gm.group_id = public.approvals.group_id and gm.user_id = auth.uid() and gm.status = 'active'
      and gm.role in ('treasurer', 'group_admin', 'chairperson', 'auditor')
  )
);
