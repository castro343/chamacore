'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/init';
import { getStoredUser } from '@/lib/auth/session';

export function useAuthSession() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = getStoredUser();
    setUser(stored);
    setLoading(false);

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? stored ?? null);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return { user, loading };
}
