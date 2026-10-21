'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useRouter } from 'next/navigation';
import { clearSessionCookie } from '@/lib/auth/session';
import { signOut } from '@/lib/auth/supabase';

const navigation: Array<{ href: Route; label: string }> = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/groups', label: 'Groups' },
  { href: '/dashboard/finance', label: 'Payments' },
  { href: '/settings', label: 'Settings' }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    clearSessionCookie();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
      <div className="mx-auto flex max-w-7xl gap-6">
        <aside className="hidden w-72 shrink-0 flex-col rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm lg:flex">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-chama-forest to-chama-emerald text-lg font-black text-white">
              C
            </div>
            <div>
              <div className="text-xl font-black text-chama-forest">ChamaCore</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Member portal</div>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-chama-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">Secure access</div>
            <div className="mt-2 text-lg font-black text-slate-900">Session enabled</div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="mb-6 flex items-center justify-between rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div>
              <p className="text-sm font-medium text-slate-500">Operations dashboard</p>
              <h1 className="text-2xl font-black text-slate-900">ChamaCore Control Centre</h1>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/settings" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                Settings
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white"
              >
                Sign out
              </button>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
