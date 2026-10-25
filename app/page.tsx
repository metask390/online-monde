import { CategoryRail } from '@/components/CategoryRail';
import { ContactCta } from '@/components/ContactCta';
import { EmptyState } from '@/components/EmptyState';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { ListingCard } from '@/components/ListingCard';
import { MilkProductCard } from '@/components/MilkProductCard';
import { SearchBar } from '@/components/SearchBar';
import { SectionHeading } from '@/components/SectionHeading';
import { getPublicSnapshot } from '@/lib/data';

export default async function HomePage() {
  const { featuredListings, recentListings, milkProducts } = await getPublicSnapshot();
  return <div className="page-frame"><div className="mb-5 md:hidden"><SearchBar /></div><Hero /><section className="section-shell mt-10"><SectionHeading kicker="اپنی پسند منتخب کریں" title="مشہور کیٹیگریز" href="/livestock-market" /><CategoryRail /></section><section className="section-shell"><SectionHeading kicker="فارم کی پیشکش" title="دستیاب اشیاء" href="/available-items" />{featuredListings.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featuredListings.slice(0, 6).map((listing) => <ListingCard key={listing.id} listing={listing} compact />)}</div> : <EmptyState title="دستیاب اشیاء جلد شامل ہوں گی" description="فارم کی منظور شدہ اشیاء یہاں نظر آئیں گی۔ فی الحال اپنی ضرورت کے لیے مویشی منڈی دیکھیں یا ایڈمن سے رابطہ کریں۔" actionHref="/contact-admin" actionLabel="ایڈمن سے رابطہ کریں" />}</section><section className="section-shell"><SectionHeading kicker="روزانہ تازہ" title="دودھ کی مصنوعات" href="/milk" />{milkProducts.length ? <div className="grid gap-5 md:grid-cols-2">{milkProducts.map((product) => <MilkProductCard key={product.id} product={product} />)}</div> : <EmptyState title="دودھ کی دستیابی جلد اپ ڈیٹ ہوگی" description="گائے اور بھینس کے تازہ دودھ کی معلومات یہاں دکھائی جائیں گی۔" actionHref="/milk" actionLabel="دودھ کا صفحہ دیکھیں" />}</section><section className="section-shell"><SectionHeading kicker="نئی پوسٹس" title="حالیہ منظور شدہ listings" href="/livestock-market" />{recentListings.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{recentListings.slice(0, 6).map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <EmptyState title="نئی پوسٹس کا انتظار ہے" description="منظور شدہ صارف listings یہاں دکھائی دیں گی۔ اپنی پوسٹ بنانے کے لیے لاگ اِن کریں۔" actionHref="/listings/new" actionLabel="اپنی پوسٹ بنائیں" />}</section><section className="section-shell"><HowItWorks /></section><ContactCta /></div>;
}
