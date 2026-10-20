import Link from 'next/link';
import { GroupForm } from '@/components/groups/group-form';

export default function NewGroupPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Group management</p>
            <h1 className="text-2xl font-black text-slate-900">Start a new chama</h1>
          </div>

          <Link href="/groups" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Back to groups
          </Link>
        </div>

        <GroupForm />
      </section>
    </main>
  );
}
