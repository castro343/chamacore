const groups = [
  { name: 'Mchango Plus', role: 'Treasurer', members: 26, progress: 87, amount: 'KSh 1.24M' },
  { name: 'Mwanzo Investment Circle', role: 'Member', members: 14, progress: 62, amount: 'KSh 840K' },
  { name: 'Amani Welfare Club', role: 'Chairperson', members: 41, progress: 93, amount: 'KSh 2.14M' }
];

export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Groups', value: '12' },
          { label: 'Contribution status', value: '87%' },
          { label: 'Pending approvals', value: '06' },
          { label: 'Upcoming meetings', value: '03' }
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">{stat.label}</div>
            <div className="mt-3 text-3xl font-black text-chama-forest">{stat.value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-chama-forest via-emerald-700 to-emerald-500 p-6 text-white shadow-premium">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Portfolio balance</div>
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
            {['Record contribution', 'Review payouts', 'Schedule meeting', 'Approve request'].map((action) => (
              <button key={action} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                <span className="font-medium text-slate-700">{action}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-chama-forest">New</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">Your groups</h2>
          <button className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white">Create group</button>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {groups.map((group) => (
            <div key={group.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-black text-slate-900">{group.name}</div>
                  <div className="mt-1 text-sm text-slate-500">Role: {group.role}</div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{group.members} members</span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Contribution progress</span>
                  <span>{group.progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-chama-forest" style={{ width: `${group.progress}%` }} />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Balance</div>
                  <div className="mt-1 text-xl font-black text-slate-900">{group.amount}</div>
                </div>
                <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
