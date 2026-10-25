'use client';

import { useTransition } from 'react';
import { updateOrderStatus } from '@/app/admin/actions';

export function OrderStatusActions({ orderId }: { orderId: string }) { const [pending, startTransition] = useTransition(); const run = (status: 'confirmed' | 'processing' | 'completed' | 'cancelled') => startTransition(async () => { const result = await updateOrderStatus({ orderId, status }); if (!result.success) window.alert(result.message); }); return <div className="flex flex-wrap gap-2">{(['confirmed', 'processing', 'completed', 'cancelled'] as const).map((status) => <button key={status} disabled={pending} onClick={() => run(status)} className="rounded-lg border border-forest/10 bg-white px-2.5 py-1.5 text-[11px] font-bold text-forest">{status}</button>)}</div>; }
