'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createChamaGroup } from '@/app/actions/chama';
import { CHAMA_ROLES } from '@/lib/chamacore';

export function GroupForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState({
    name: '',
    description: '',
    location: 'Nairobi, Kenya',
    role: 'group_admin',
    status: 'active'
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, String(value)));

    startTransition(async () => {
      const result = await createChamaGroup(formData);
      if (result.ok) {
        router.push('/groups');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Group name</label>
        <input
          required
          value={form.name}
          onChange={(event) => handleChange('name', event.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
          placeholder="e.g. Umoja Savings Circle"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
        <textarea
          value={form.description}
          onChange={(event) => handleChange('description', event.target.value)}
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
          placeholder="Describe the purpose of this group"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
          <input
            value={form.location}
            onChange={(event) => handleChange('location', event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="Nairobi, Kenya"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Initial role</label>
          <select
            value={form.role}
            onChange={(event) => handleChange('role', event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
          >
            {CHAMA_ROLES.map((role) => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Group status</label>
        <select
          value={form.status}
          onChange={(event) => handleChange('status', event.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500 focus:bg-white"
        >
          <option value="active">Active</option>
          <option value="pending">Pending approval</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <button type="submit" disabled={isPending} className="w-full rounded-2xl bg-chama-forest px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70">
        {isPending ? 'Creating group...' : 'Create group'}
      </button>
    </form>
  );
}
