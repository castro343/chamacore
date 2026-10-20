import Link from 'next/link';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const isLogin = mode === 'login';

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

      <form className="space-y-5">
        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="Your full name" />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="name@example.com" type="email" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
          <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="••••••••" type="password" />
        </div>

        {!isLogin && (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Country</label>
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white">
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Tanzania</option>
            </select>
          </div>
        )}

        <button type="submit" className="w-full rounded-2xl bg-chama-forest px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
          {isLogin ? 'Sign in' : 'Create account'}
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
