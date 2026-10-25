import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { FavoritesList } from '@/components/PublicAccount';
export const metadata: Metadata = { title: 'پسندیدہ listings', description: 'محفوظ کی گئی listings دیکھیں۔' };
export default function FavoritesPage() { return <div className="page-frame"><PageIntro kicker="saved for later" title="پسندیدہ listings" description="جن listings کو آپ نے محفوظ کیا ہے وہ یہاں دکھائی دیں گی۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/favorites" /><section className="soft-card p-5 sm:p-7"><FavoritesList /></section></div></div>; }
