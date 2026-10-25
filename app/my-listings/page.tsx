import type { Metadata } from 'next';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'میری پوسٹس', description: 'اپنی listings کے status اور actions دیکھیں۔' };

export default function MyListingsPage() { return <div className="page-frame"><PageIntro kicker="your marketplace" title="میری پوسٹس" description="Pending، approved، rejected اور sold listings کا status یہاں manage ہوگا۔" /><div className="grid gap-7 lg:grid-cols-[.75fr_1.25fr]"><ProtectedNotice redirect="/my-listings" /><EmptyState title="آپ کی پوسٹس یہاں نظر آئیں گی" description="لاگ اِن کے بعد اپنی نئی listing بنائیں، edit کریں یا approved post کو sold mark کریں۔" actionHref="/listings/new" actionLabel="نئی پوسٹ بنائیں" /></div></div>; }
