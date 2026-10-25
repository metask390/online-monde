'use client';

import { usePathname } from 'next/navigation';
import { BottomNav } from '@/components/BottomNav';
import { Footer } from '@/components/Footer';

export function GlobalChrome() {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) return null;
  return <><Footer /><BottomNav /></>;
}
