import Link from 'next/link';
import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
      <div className="mx-auto flex max-w-7xl gap-6">
        <DashboardSidebar />

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
              <Link href="/login" className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white">
                Sign out
              </Link>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
