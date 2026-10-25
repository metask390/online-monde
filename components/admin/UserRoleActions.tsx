'use client';

import { useTransition } from 'react';
import { setUserRole } from '@/app/admin/actions';

export function UserRoleActions({ userId }: { userId: string }) { const [pending, startTransition] = useTransition(); function run(role: 'admin' | 'user') { if (!window.confirm(role === 'admin' ? 'Promote this user to admin?' : 'Demote this user?')) return; startTransition(async () => { const result = await setUserRole({ userId, role }); if (!result.success) window.alert(result.message); }); } return <div className="flex gap-2"><button disabled={pending} onClick={() => run('admin')} className="rounded-lg bg-gold/20 px-3 py-2 text-xs font-bold text-forest">Promote</button><button disabled={pending} onClick={() => run('user')} className="rounded-lg border border-forest/10 px-3 py-2 text-xs font-bold text-forest">Demote</button></div>; }
