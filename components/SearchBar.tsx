'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchBar({ compact = false, defaultValue = '' }: { compact?: boolean; defaultValue?: string }) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();
  function submit(event: FormEvent) { event.preventDefault(); router.push(`/livestock-market?search=${encodeURIComponent(query.trim())}`); }
  return <form onSubmit={submit} className={`flex items-center gap-2 rounded-[1.35rem] border border-forest/10 bg-white/90 p-2 shadow-card ${compact ? 'max-w-md' : 'w-full'}`} role="search"><Search className="mr-2 shrink-0 text-forest/55" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="مویشی، نسل یا شہر تلاش کریں..." className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-ink outline-none placeholder:text-muted/70" aria-label="تلاش" /><button type="button" className="hidden rounded-xl p-2 text-forest/55 hover:bg-gold/15 sm:block" aria-label="فلٹر کھولیں"><SlidersHorizontal size={18} /></button><button type="submit" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest text-white transition hover:bg-forest-dark" aria-label="تلاش کریں"><Search size={17} /></button></form>;
}
