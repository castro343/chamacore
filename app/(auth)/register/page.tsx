import { AuthForm } from '@/components/auth/auth-form';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-premium">
        <div className="grid min-h-[700px] lg:grid-cols-2">
          <section className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              <AuthForm mode="register" />
            </div>
          </section>

          <section className="hidden bg-gradient-to-br from-slate-900 via-slate-800 to-chama-forest p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl font-black">C</div>
                <div>
                  <div className="text-[22px] font-black">ChamaCore</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-300">Built for trust</div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-black leading-tight">Create a stronger financial future for your group.</h1>
              <p className="mt-5 max-w-md text-base text-slate-300">
                Start with secure account creation, custom group settings, and the foundation for transparent contribution and approval workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-sm text-slate-300">Member onboarding</div>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-black">4 steps</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold">Easy setup</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
