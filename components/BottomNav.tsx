'use client';

import Link from 'next/link';
import { Bell, Home, Package, Phone, Store } from 'lucide-react';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'ڈیش بورڈ', icon: Home },
  { href: '/available-items', label: 'دستیاب اشیاء', icon: Package },
  { href: '/livestock-market', label: 'مویشی منڈی', icon: Store },
  { href: '/contact-admin', label: 'ایڈمن سے رابطہ', icon: Phone },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="اہم نیویگیشن" className="fixed bottom-0 left-0 right-0 z-40 border-t border-forest/10 bg-cream/95 px-2 py-2 shadow-[0_-10px_30px_rgba(26,77,46,0.08)] backdrop-blur-xl md:px-6">
      <div className="mx-auto grid max-w-3xl grid-cols-4 gap-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return <Link key={href} href={href} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-center transition ${active ? 'bg-forest text-white shadow-lg shadow-forest/20' : 'text-forest/65 hover:bg-gold/10 hover:text-forest'}`} aria-current={active ? 'page' : undefined}><Icon size={18} strokeWidth={active ? 2.4 : 1.8} /><span className="font-urdu text-[10px] leading-tight sm:text-xs">{label}</span></Link>;
        })}
      </div>
    </nav>
  );
}
