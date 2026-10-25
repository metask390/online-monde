'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function MarketplaceFilters() {
  const params = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(params.get('search') || '');
  function update(key: string, value: string) { const next = new URLSearchParams(params.toString()); value ? next.set(key, value) : next.delete(key); router.push(`/livestock-market?${next.toString()}`); }
  return <div className="soft-card mb-7 p-3"><div className="grid gap-2 md:grid-cols-[1.4fr_repeat(3,1fr)_auto]"><div className="flex items-center gap-2 rounded-xl bg-cream px-3"><Search size={17} className="text-forest/55" /><input value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && update('search', search)} placeholder="تلاش: نسل، City..." className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" aria-label="مارکیٹ سرچ" /></div><select defaultValue={params.get('category') || ''} onChange={(event) => update('category', event.target.value)} className="field !rounded-xl !py-2.5"><option value="">تمام Categoryز</option><option value="cow">گائے</option><option value="buffalo">بھینس</option><option value="goat">بکری</option><option value="sheep">بھیڑ</option><option value="horse">گھوڑا</option></select><input defaultValue={params.get('city') || ''} onBlur={(event) => update('city', event.target.value)} placeholder="City" className="field !rounded-xl !py-2.5" aria-label="City" /><select defaultValue={params.get('sort') || 'newest'} onChange={(event) => update('sort', event.target.value)} className="field !rounded-xl !py-2.5"><option value="newest">New listings</option><option value="price-asc">کم Price پہلے</option><option value="price-desc">زیادہ Price پہلے</option></select><button type="button" className="secondary-button !rounded-xl !px-4 !py-2.5" aria-label="مزید فلٹرز"><SlidersHorizontal size={17} /></button></div></div>;
}
