import type { Metadata } from 'next';
import { Bell, CheckCheck } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'نوٹیفکیشنز', description: 'اپنے account notifications پڑھیں۔' };

export default function NotificationsPage() { return <div className="page-frame"><PageIntro kicker="stay informed" title="نوٹیفکیشنز" description="اپنی listing approval، messages اور orders کی تازہ updates یہاں پڑھیں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/notifications" /><section className="soft-card p-5 sm:p-7"><div className="mb-6 flex items-center justify-between"><h2 className="font-urdu text-xl font-bold text-forest">آپ کی updates</h2><button className="flex items-center gap-2 text-xs font-bold text-forest"><CheckCheck size={15} /> سب پڑھ لیا</button></div><EmptyState title="ابھی کوئی notification نہیں" description="نئی activity آنے پر آپ کو یہاں اطلاع ملے گی۔" /></section></div></div>; }
