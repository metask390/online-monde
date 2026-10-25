import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { MarketplaceFilters } from '@/components/MarketplaceFilters';
import { PageIntro } from '@/components/PageIntro';
import { ListingCard } from '@/components/ListingCard';
import { getPublicSnapshot } from '@/lib/data';

export const metadata: Metadata = { title: 'مویشی منڈی', description: 'منظور شدہ صارف listings اور مویشی تلاش کریں۔' };

export default async function LivestockMarketPage() {
  const { recentListings } = await getPublicSnapshot();
  return <div className="page-frame"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><PageIntro kicker="user marketplace" title="مویشی منڈی" description="شہر، نسل، عمر اور قیمت کے حساب سے approved listings تلاش کریں۔" /><Link href="/auth/login?redirect=/listings/new" className="gold-button self-start sm:mb-8"><Plus size={17} /> اپنی پوسٹ بنائیں</Link></div><MarketplaceFilters />{recentListings.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{recentListings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyState search title="اس وقت approved listings نہیں" description="نئی listings منظوری کے بعد یہاں دکھائی دیں گی۔ آپ اپنی پوسٹ بنا کر منڈی میں شامل ہو سکتے ہیں۔" actionHref="/auth/login?redirect=/listings/new" actionLabel="لاگ اِن کر کے پوسٹ بنائیں" />}</div>;
}
