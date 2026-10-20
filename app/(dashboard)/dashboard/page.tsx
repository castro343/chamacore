import Link from 'next/link';

const stats = [
  { label: 'Groups', value: '12' },
  { label: 'Contribution status', value: '87%' },
  { label: 'Pending approvals', value: '06' },
  { label: 'Upcoming meetings', value: '03' }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm font-medium text-slate-500">Welcome back</p>
            <h1 className="text-2xl font-black text-slate-900">Aisha Wanjiku</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-medium text-slate-600">Home</Link>
            <Link href="/login" className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white">
              Logout
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-3 text-3xl font-black text-chama-forest">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-chama-forest via-emerald-700 to-emerald-500 p-6 text-white shadow-premium">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Group balance</div>
                <div className="mt-3 text-4xl font-black">KSh 2.48M</div>
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">+12.4%</div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between text-sm text-emerald-100">
                <span>Contribution progress</span>
                <span>87%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[87%] rounded-full bg-chama-gold" />
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-900">Quick actions</h2>
            <div className="mt-5 space-y-3">
              <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                <span className="font-medium text-slate-700">Record contribution</span>
                <span className="text-xs uppercase tracking-[0.2em] text-chama-forest">New</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                <span className="font-medium text-slate-700">Review payouts</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">4</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                <span className="font-medium text-slate-700">Schedule meeting</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Next</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
