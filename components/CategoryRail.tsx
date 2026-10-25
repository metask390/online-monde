import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { categoryIcons, categoryLabels } from '@/lib/format';
import { categories } from '@/lib/data';

export function CategoryRail() {
  return <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3">{categories.map((category) => <Link key={category} href={`/livestock-market?category=${category}`} className="group flex flex-col items-center gap-2 rounded-2xl border border-forest/10 bg-white/65 px-2 py-4 text-center transition hover:-translate-y-1 hover:border-gold hover:bg-gold/10"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-2xl transition group-hover:bg-white">{categoryIcons[category]}</span><span className="font-urdu text-xs font-bold text-forest">{categoryLabels[category]}</span></Link>)}<Link href="/livestock-market" className="col-span-4 mt-1 flex items-center justify-center gap-2 text-xs font-bold text-forest sm:col-span-8"><span>تمام کیٹیگریز دیکھیں</span><ArrowLeft size={14} /></Link></div>;
}
