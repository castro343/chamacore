import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container-shell flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-chama-forest to-chama-emerald text-lg font-bold text-white shadow-premium">
              C
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-chama-forest">ChamaCore</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">The Core of Every Chama</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-700 transition hover:text-chama-forest">
              Sign in
            </Link>
            <Link href="/register">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Premium fintech for money circles
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Manage your chama with clarity, trust, and momentum.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            ChamaCore brings together contributions, approvals, payouts, meetings, and group governance in one secure platform built for Kenyan chamas and growing savings communities.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/register">
              <Button className="px-7 py-3 text-base">Create account</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="secondary" className="px-7 py-3 text-base">
                View demo dashboard
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-black text-chama-forest">24/7</div>
              <div>Secure access</div>
            </div>
            <div>
              <div className="text-2xl font-black text-chama-forest">12k+</div>
              <div>Member records</div>
            </div>
            <div>
              <div className="text-2xl font-black text-chama-forest">99.9%</div>
              <div>Trust focused</div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-premium">
          <div className="rounded-[20px] bg-gradient-to-br from-chama-forest via-emerald-700 to-emerald-500 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Savings overview</p>
                <h2 className="mt-3 text-3xl font-black">KSh 2.48M</h2>
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">+12.4%</div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-sm text-emerald-100">
                <span>Contribution status</span>
                <span>87% complete</span>
              </div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[87%] rounded-full bg-chama-gold" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-emerald-100">Active groups</div>
                <div className="mt-2 text-2xl font-black">18</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-emerald-100">Pending approvals</div>
                <div className="mt-2 text-2xl font-black">06</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
