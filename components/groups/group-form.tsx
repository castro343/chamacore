'use client';

import { useState } from 'react';
import { DEFAULT_GROUP_TEMPLATE, CHAMA_ROLES } from '@/lib/chamacore';

export function GroupForm() {
  const [form, setForm] = useState(DEFAULT_GROUP_TEMPLATE);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('chamacore-groups') || '[]');
      const next = [
        {
          id: `group-${Date.now()}`,
          name: form.name || 'New Chama Group',
          description: form.description || 'Group created from ChamaCore',
          status: form.status,
          role: form.role,
          members: 1,
          contributionProgress: 0,
          balance: 'KSh 0',
          location: form.location
        },
        ...existing
      ];

      localStorage.setItem('chamacore-groups', JSON.stringify(next));
      window.location.href = '/groups';
    }
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
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
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

      <button type="submit" className="w-full rounded-2xl bg-chama-forest px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
        Create group
      </button>
    </form>
  );
}
