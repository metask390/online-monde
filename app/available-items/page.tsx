import type { Metadata } from 'next';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ListingCard } from '@/components/ListingCard';
import { MilkProductCard } from '@/components/MilkProductCard';
import { getPublicSnapshot } from '@/lib/data';
export const metadata: Metadata = { title: 'دستیاب اشیاء', description: 'ابوزریاز کیٹل فارم کی منظور شدہ دستیاب اشیاء۔' };
export default async function AvailableItemsPage() { const { featuredListings, milkProducts } = await getPublicSnapshot(); return <div className="page-frame"><PageIntro kicker="فارم catalogue" title="دستیاب اشیاء" description="فارم کی منظور شدہ اشیاء اور تازہ دودھ کی پیشکشیں ایک جگہ دیکھیں۔" /><div className="mb-7 flex flex-wrap gap-2"><span className="primary-button !rounded-xl !px-4 !py-2 text-xs">تمام</span><a href="/milk" className="secondary-button !rounded-xl !px-4 !py-2 text-xs">دودھ</a></div>{featuredListings.length || milkProducts.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredListings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}{milkProducts.map((product) => <MilkProductCard key={product.id} product={product} />)}</div> : <EmptyState title="ابھی دستیاب اشیاء شامل نہیں" description="فارم کی approved listings اور milk products database سے ظاہر ہوں گی۔" actionHref="/contact-admin" actionLabel="اپنی ضرورت بتائیں" />}</div>; }
