import { createServerSupabaseClient } from '@/lib/supabase/server';

export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured()) {
    return { user: null, error: new Error('Supabase is not configured.') };
  }

  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
}

export async function signOut() {
  if (!isSupabaseConfigured()) {
    return { ok: false, message: 'Supabase is not configured.' };
  }

  const supabase = createServerSupabaseClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { ok: false, message: error.message };
  }

  return { ok: true, message: 'Signed out successfully.' };
}
