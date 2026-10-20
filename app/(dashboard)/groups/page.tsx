import Link from 'next/link';
import { getGroupsForUser } from '@/app/actions/chama';
import { SAMPLE_GROUPS } from '@/lib/chamacore';

export default async function GroupsPage() {
  const groups = await getGroupsForUser().catch(() => SAMPLE_GROUPS);

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Groups hub</p>
            <h1 className="text-2xl font-black text-slate-900">Manage all your chamas</h1>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">Join group</button>
            <Link href="/groups/new" className="rounded-full bg-chama-forest px-4 py-2 text-sm font-semibold text-white">
              Create group
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group: any) => (
            <div key={group.id || group.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-black text-slate-900">{group.name}</div>
                  <div className="mt-1 text-sm text-slate-500">Role: {group.role}</div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{group.members} members</span>
              </div>

              <div className="mt-4 text-sm text-slate-600">{group.description}</div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Contribution progress</span>
                  <span>{group.contributionProgress ?? group.progress ?? 0}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-chama-forest" style={{ width: `${group.contributionProgress ?? group.progress ?? 0}%` }} />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Balance</div>
                  <div className="mt-1 text-xl font-black text-slate-900">{group.balance}</div>
                </div>
                <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Open</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
