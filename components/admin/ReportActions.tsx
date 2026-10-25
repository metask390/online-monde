'use client';

import { useTransition } from 'react';
import { resolveReport } from '@/app/admin/actions';

export function ReportActions({ reportId, listingId }: { reportId: string; listingId: string }) { const [pending, startTransition] = useTransition(); function run(removeListing: boolean) { if (removeListing && !window.confirm('Remove this listing from public visibility?')) return; startTransition(async () => { const result = await resolveReport({ reportId, listingId, removeListing }); if (!result.success) window.alert(result.message); }); } return <div className="flex gap-2"><button disabled={pending} onClick={() => run(false)} className="secondary-button !rounded-xl !px-3 !py-2 text-xs">Dismiss</button><button disabled={pending} onClick={() => run(true)} className="rounded-xl bg-red-100 px-3 py-2 text-xs font-bold text-red-700">Remove listing</button></div>; }
