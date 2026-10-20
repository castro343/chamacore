'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { SAMPLE_GROUPS } from '@/lib/chamacore';

const createGroupSchema = z.object({
  name: z.string().min(2, 'Group name is required.'),
  description: z.string().optional().default(''),
  location: z.string().optional().default('Kenya'),
  role: z.enum(['member', 'group_admin', 'treasurer', 'chairperson', 'auditor', 'platform_admin']).optional().default('group_admin'),
  status: z.enum(['active', 'pending', 'archived']).optional().default('active')
});

export async function createChamaGroup(formData: FormData) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return { ok: false, message: 'Supabase credentials are missing. Add your environment values to continue.' };
  }

  const payload = createGroupSchema.parse({
    name: formData.get('name'),
    description: formData.get('description') || '',
    location: formData.get('location') || 'Kenya',
    role: formData.get('role') || 'group_admin',
    status: formData.get('status') || 'active'
  });

  const supabase = createServerSupabaseClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { ok: false, message: 'You must be signed in to create a group.' };
  }

  const { error } = await supabase.from('groups').insert({
    name: payload.name,
    description: payload.description,
    created_by: userData.user.id,
    status: payload.status,
    location: payload.location
  }).select();

  if (error) {
    return { ok: false, message: error.message };
  }

  await supabase.from('group_members').insert({
    group_id: (await supabase.from('groups').select('id').eq('name', payload.name).order('created_at', { ascending: false }).limit(1).single()).data?.id,
    user_id: userData.user.id,
    role: payload.role,
    status: 'active'
  });

  revalidatePath('/groups');
  return { ok: true, message: 'Group created successfully.' };
}

export async function getGroupsForUser() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return SAMPLE_GROUPS;
  }

  const supabase = createServerSupabaseClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return SAMPLE_GROUPS;
  }

  const { data, error } = await supabase
    .from('group_members')
    .select('role, status, groups(id, name, description, location, status)')
    .eq('user_id', userData.user.id)
    .eq('status', 'active');

  if (error || !data) {
    return SAMPLE_GROUPS;
  }

  return data.map((row: any) => ({
    id: row.groups.id,
    name: row.groups.name,
    description: row.groups.description,
    status: row.groups.status,
    members: 1,
    role: row.role,
    contributionProgress: 0,
    balance: 'KSh 0',
    location: row.groups.location || 'Kenya'
  }));
}
