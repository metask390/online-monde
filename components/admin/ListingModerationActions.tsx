'use client';

import { useTransition } from 'react';
import { moderateListing } from '@/app/admin/actions';

export function ListingModerationActions({ listingId }: { listingId: string }) { const [pending, startTransition] = useTransition(); function run(status: 'approved' | 'rejected' | 'sold' | 'inactive') { const reason = status === 'rejected' ? window.prompt('Rejection reason') || '' : undefined; startTransition(async () => { const result = await moderateListing({ listingId, status, reason }); if (!result.success) window.alert(result.message); }); } return <div className="flex flex-wrap gap-2"><button disabled={pending} onClick={() => run('approved')} className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-800">Approve</button><button disabled={pending} onClick={() => run('rejected')} className="rounded-lg bg-red-100 px-3 py-2 text-xs font-bold text-red-800">Reject</button><button disabled={pending} onClick={() => run('sold')} className="rounded-lg bg-gold/20 px-3 py-2 text-xs font-bold text-forest">Sold</button></div>; }
