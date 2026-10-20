import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function signInWithEmail(email: string, password: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { ok: false, message: error.message };
  }

  return { ok: true, user: data.user };
}

export async function signUpWithEmail(email: string, password: string, fullName: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (error) {
    return { ok: false, message: error.message };
  }

  return { ok: true, user: data.user };
}
