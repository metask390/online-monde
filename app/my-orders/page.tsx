import type { Metadata } from 'next';
import { Check, Circle } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'میرے آرڈرز', description: 'Milk orders اور status timeline دیکھیں۔' };

export default function MyOrdersPage() { const timeline = ['Pending', 'Confirmed', 'Processing', 'Completed']; return <div className="page-frame"><PageIntro kicker="order history" title="میرے آرڈرز" description="اپنے milk orders، order number، total PKR اور delivery status دیکھیں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/my-orders" /><section className="soft-card p-6"><h2 className="font-urdu text-xl font-bold text-forest">Order status timeline</h2><div className="mt-8 flex items-center justify-between gap-2">{timeline.map((step, index) => <div key={step} className="flex flex-1 flex-col items-center gap-2 text-center"><span className={`grid h-10 w-10 place-items-center rounded-full ${index === 0 ? 'bg-gold text-forest-dark' : 'bg-cream text-forest/40'}`}>{index === 0 ? <Check size={17} /> : <Circle size={17} />}</span><span className="font-sans text-[10px] text-muted">{step}</span></div>)}</div><div className="mt-10"><EmptyState title="ابھی کوئی آرڈر نہیں" description="Milk product منتخب کر کے order دینے کے بعد اس کی تفصیل یہاں آئے گی۔" actionHref="/milk" actionLabel="دودھ دیکھیں" /></div></section></div></div>; }
