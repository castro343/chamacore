export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900">Profile & settings</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Personal profile</div>
            <div className="mt-3 text-lg font-black text-slate-900">Aisha Wanjiku</div>
            <div className="mt-1 text-sm text-slate-600">aisha@chamacore.app</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm text-slate-500">Security</div>
            <div className="mt-3 text-lg font-black text-slate-900">2-step verification enabled</div>
            <div className="mt-1 text-sm text-slate-600">Strong password and trusted device</div>
          </div>
        </div>
      </section>
    </main>
  );
}
