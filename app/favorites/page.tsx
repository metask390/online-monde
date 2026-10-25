import type { Metadata } from 'next';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'پسندیدہ listings', description: 'محفوظ کی گئی listings دیکھیں۔' };

export default function FavoritesPage() { return <div className="page-frame"><PageIntro kicker="saved for later" title="پسندیدہ listings" description="جن listings کو آپ نے محفوظ کیا ہے وہ یہاں دکھائی دیں گی۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/favorites" /><EmptyState title="آپ کی favorites خالی ہیں" description="کسی listing پر دل کے نشان سے اسے بعد کے لیے محفوظ کریں۔" actionHref="/livestock-market" actionLabel="منڈی دیکھیں" /></div></div>; }
