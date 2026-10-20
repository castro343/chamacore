'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearSessionCookie, setSessionCookie } from '@/lib/auth/session';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const router = useRouter();
  const isLogin = mode === 'login';
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const fullName = (event.currentTarget.elements.namedItem('fullName') as HTMLInputElement)?.value || 'ChamaCore Member';

    setSessionCookie({ email, fullName });

    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 250);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-chama-forest to-chama-emerald text-2xl font-black text-white shadow-premium">
          C
        </div>
        <h1 className="text-3xl font-black text-slate-900">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-2 text-sm text-slate-500">
          {isLogin ? 'Securely access your chama and financial records.' : 'Join ChamaCore and begin managing your groups with confidence.'}
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input
              name="fullName"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
              placeholder="Your full name"
            />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
          <input
            name="email"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="name@example.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
          <input
            name="password"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="••••••••"
            type="password"
            required
          />
        </div>

        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Country</label>
            <select
              name="country"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
              defaultValue="Kenya"
            >
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
            </select>
          </div>
        )}

        <button type="submit" className="w-full rounded-2xl bg-chama-forest px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70" disabled={loading}>
          {loading ? 'Please wait...' : isLogin ? 'Sign in' : 'Create account'}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{isLogin ? 'New to ChamaCore?' : 'Already have an account?'}</span>
        <Link href={isLogin ? '/register' : '/login'} className="font-semibold text-chama-forest">
          {isLogin ? 'Create account' : 'Sign in'}
        </Link>
      </div>
    </div>
  );
}
