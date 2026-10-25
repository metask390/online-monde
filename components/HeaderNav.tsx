'use client';

import Link from 'next/link';
import { Bell, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { BrandMark } from '@/components/BrandMark';

const secondaryLinks = [
  ['پروفائل', '/profile'], ['میری پوسٹس', '/my-listings'], ['میرے آرڈرز', '/my-orders'],
  ['پیغامات', '/messages'], ['پسندیدہ', '/favorites'], ['نوٹیفکیشنز', '/notifications'],
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <BrandMark />
        <div className="hidden items-center gap-2 sm:flex">
          <Link href="/search" className="grid h-10 w-10 place-items-center rounded-xl text-forest transition hover:bg-gold/15" aria-label="تلاش">
            <Search size={19} />
          </Link>
          <Link href="/notifications" className="relative grid h-10 w-10 place-items-center rounded-xl text-forest transition hover:bg-gold/15" aria-label="نوٹیفکیشنز">
            <Bell size={19} />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gold" aria-label="ایک unread notification" />
          </Link>
          <Link href="/auth/login" className="secondary-button !rounded-xl !px-4 !py-2 text-xs">لاگ اِن</Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-xl text-forest hover:bg-gold/15 sm:hidden" onClick={() => setOpen(true)} aria-label="مینو کھولیں">
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-forest/30 backdrop-blur-sm sm:hidden" onClick={() => setOpen(false)}>
          <aside className="mr-auto h-full w-[min(84vw,360px)] bg-cream p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between"><BrandMark compact /><button onClick={() => setOpen(false)} aria-label="مینو بند کریں" className="grid h-10 w-10 place-items-center rounded-xl hover:bg-gold/15"><X size={20} /></button></div>
            <div className="space-y-2">
              <Link href="/search" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/65 px-4 py-3 text-sm font-bold text-forest"><Search size={17} /> تلاش کریں</Link>
              {secondaryLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-urdu text-base text-ink transition hover:bg-gold/15">{label}</Link>)}
              <Link href="/auth/login" onClick={() => setOpen(false)} className="primary-button mt-4 w-full">لاگ اِن / رجسٹر</Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
