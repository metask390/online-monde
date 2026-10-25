import type { Metadata } from 'next';
import { EmptyState } from '@/components/EmptyState';
import { MilkProductCard } from '@/components/MilkProductCard';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { getPublicSnapshot } from '@/lib/data';

export const metadata: Metadata = { title: 'تازہ دودھ', description: 'گائے اور بھینس کے تازہ دودھ کی products اور delivery options۔' };

export default async function MilkPage() { const { milkProducts } = await getPublicSnapshot(); return <div className="page-frame"><PageIntro kicker="fresh from the farm" title="تازہ دودھ" description="گائے اور بھینس کے دودھ کی قیمت، quantity اور delivery areas دیکھیں۔" />{milkProducts.length ? <div className="grid gap-5 md:grid-cols-2">{milkProducts.map((product) => <MilkProductCard key={product.id} product={product} />)}</div> : <div className="grid gap-7 lg:grid-cols-[1fr_.75fr]"><EmptyState title="دودھ کی products جلد دستیاب ہوں گی" description="Active milk products database connect ہونے کے بعد یہاں cards اور order buttons دکھائی دیں گے۔" /><ProtectedNotice title="Order flow تیار ہے" description="Quantity، pickup/delivery، address اور notes کے ساتھ order دینے کے لیے پہلے لاگ اِن کریں۔" redirect="/milk" /></div>}</div>; }
