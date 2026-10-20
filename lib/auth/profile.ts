import { supabase } from '@/lib/supabase/init';

export async function getUserProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
