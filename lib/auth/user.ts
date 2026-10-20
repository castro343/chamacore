import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function getAuthenticatedUser() {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user;
}
