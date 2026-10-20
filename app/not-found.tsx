import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="text-sm uppercase tracking-[0.25em] text-slate-500">404</div>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you were looking for does not exist.</p>
        <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-chama-forest px-5 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
