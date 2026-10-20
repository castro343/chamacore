import { AuthForm } from '@/components/auth/auth-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50 p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-premium">
        <div className="grid min-h-[700px] lg:grid-cols-2">
          <section className="hidden bg-gradient-to-br from-chama-forest via-emerald-700 to-chama-emerald p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">C</div>
                <div>
                  <div className="text-[22px] font-black">ChamaCore</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-emerald-100">The Core of Every Chama</div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-black leading-tight">Welcome back to your trusted financial hub.</h1>
              <p className="mt-5 max-w-md text-base text-emerald-100">
                Manage contributions, approvals, meetings, and records in one secure place built for collective financial wellbeing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-sm text-emerald-100">This week</div>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-black">KSh 845,200</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold">+8.6%</span>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              <AuthForm mode="login" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
