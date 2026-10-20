export type ChamaRole = 'member' | 'group_admin' | 'treasurer' | 'chairperson' | 'auditor' | 'platform_admin';

export type GroupStatus = 'active' | 'pending' | 'archived';

export interface GroupRecord {
  id: string;
  name: string;
  description: string;
  status: GroupStatus;
  members: number;
  role: ChamaRole;
  contributionProgress: number;
  balance: string;
  location: string;
}

export const CHAMA_ROLES: Array<{ value: ChamaRole; label: string; description: string }> = [
  { value: 'member', label: 'Member', description: 'Can contribute and view permitted records' },
  { value: 'group_admin', label: 'Group Admin', description: 'Manages membership and settings' },
  { value: 'treasurer', label: 'Treasurer', description: 'Maintains financial records and reports' },
  { value: 'chairperson', label: 'Chairperson', description: 'Oversees group operations and key decisions' },
  { value: 'auditor', label: 'Auditor', description: 'Reviews approved financial records' },
  { value: 'platform_admin', label: 'Platform Admin', description: 'Platform operations and support' }
];

export const DEFAULT_GROUP_TEMPLATE = {
  name: '',
  description: '',
  status: 'active',
  role: 'group_admin' as ChamaRole,
  location: 'Nairobi, Kenya'
};

export const SAMPLE_GROUPS: GroupRecord[] = [
  {
    id: 'g-101',
    name: 'Mchango Plus',
    description: 'Weekly savings and project fundraising circle',
    status: 'active',
    members: 26,
    role: 'treasurer',
    contributionProgress: 87,
    balance: 'KSh 1.24M',
    location: 'Nairobi'
  },
  {
    id: 'g-102',
    name: 'Mwanzo Investment Circle',
    description: 'Investment club focused on portfolio growth',
    status: 'active',
    members: 14,
    role: 'member',
    contributionProgress: 62,
    balance: 'KSh 840K',
    location: 'Nakuru'
  },
  {
    id: 'g-103',
    name: 'Amani Welfare Club',
    description: 'Support and welfare group for members and families',
    status: 'active',
    members: 41,
    role: 'chairperson',
    contributionProgress: 93,
    balance: 'KSh 2.14M',
    location: 'Kisumu'
  }
];
