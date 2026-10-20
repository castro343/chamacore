export default function FinancePage() {
  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900">Payments & records</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Verified contributions</div>
            <div className="mt-3 text-3xl font-black text-chama-forest">KSh 861K</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Outstanding</div>
            <div className="mt-3 text-3xl font-black text-slate-900">KSh 96K</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Pending payout approvals</div>
            <div className="mt-3 text-3xl font-black text-slate-900">04</div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">Recent transactions</h2>
          <button className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white">Add payment</button>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Monthly contribution - Aisha Wanjiku', amount: '+KSh 15,000', status: 'Verified' },
            { label: 'Project disbursement - Water tank fund', amount: '-KSh 58,000', status: 'Awaiting approval' },
            { label: 'Emergency fund contribution', amount: '+KSh 10,000', status: 'Verified' }
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <div className="font-medium text-slate-800">{item.label}</div>
                <div className="mt-1 text-sm text-slate-500">{item.status}</div>
              </div>
              <div className={`text-lg font-black ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
