'use client';

import Link from 'next/link';
import { Bell, ChevronDown, LogOut, Menu, Search, ShieldCheck, UserRound, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BrandMark } from '@/components/BrandMark';
import { createClient } from '@/lib/supabase/browser';
import { LanguageToggle } from '@/components/LanguageProvider';

const ADMIN_EMAIL = 'muhammaddanyal4545@gmail.com';
const secondaryLinks = [['Profile', '/profile'], ['My Listings', '/my-listings'], ['My Orders', '/my-orders'], ['Messages', '/messages'], ['Favorites', '/favorites'], ['Notifications', '/notifications']];

export function HeaderNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => { const client = createClient(); if (!client) return; client.auth.getUser().then(({ data }) => setEmail(data.user?.email || null)); const { data } = client.auth.onAuthStateChange((_event, session) => setEmail(session?.user?.email || null)); return () => data.subscription.unsubscribe(); }, []);
  if (pathname.startsWith('/admin')) return null;
  const isAdmin = email?.toLowerCase() === ADMIN_EMAIL;
  async function logout() { const client = createClient(); await client?.auth.signOut(); setEmail(null); setMenu(false); setOpen(false); router.refresh(); }
  function closeDrawer() { setOpen(false); }
  return <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <BrandMark />
      <div className="hidden items-center gap-2 sm:flex"><LanguageToggle /><Link href="/search" className="grid h-10 w-10 place-items-center rounded-xl text-forest transition hover:bg-orange/10" aria-label="Search"><Search size={19} /></Link><Link href="/notifications" className="relative grid h-10 w-10 place-items-center rounded-xl text-forest transition hover:bg-orange/10" aria-label="Notifications"><Bell size={19} /><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange" /></Link>{email ? <div className="relative"><button onClick={() => setMenu(!menu)} className="secondary-button !rounded-xl !px-3 !py-2 text-xs"><UserRound size={16} /> {email.split('@')[0]} <ChevronDown size={14} /></button>{menu && <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-emerald-900/10 bg-white p-2 text-gray-900 shadow-xl"><Link href="/profile" onClick={() => setMenu(false)} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-gray-100"><UserRound size={16} /> Profile</Link>{isAdmin && <Link href="/admin" onClick={() => setMenu(false)} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-forest hover:bg-gray-100"><ShieldCheck size={16} /> Admin Dashboard</Link>}<button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"><LogOut size={16} /> Sign out</button></div>}</div> : <Link href="/auth/login" className="primary-button !rounded-xl !px-4 !py-2 text-xs">Sign in</Link>}</div>
      <button className="grid h-10 w-10 place-items-center rounded-xl text-forest hover:bg-orange/10 sm:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
    </div>
    {open && <div className="fixed inset-0 z-50 bg-black/50 sm:hidden" onClick={closeDrawer} role="presentation"><aside className="mr-auto flex h-full w-[min(86vw,380px)] flex-col overflow-y-auto bg-white p-5 text-gray-900 shadow-xl" onClick={(event) => event.stopPropagation()} aria-label="Mobile navigation menu">
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5"><BrandMark compact /><button onClick={closeDrawer} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-xl text-gray-700 hover:bg-gray-100"><X size={20} /></button></div>
      {email && <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gray-50 p-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-forest"><UserRound size={19} /></span><div className="min-w-0"><p className="truncate text-sm font-bold text-gray-900">{email.split('@')[0]}</p><p className="truncate text-xs text-gray-500">{email}</p></div></div>}
      <div className="mb-4 flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3"><span className="text-sm font-bold text-gray-900">Language</span><LanguageToggle /></div>
      <nav className="space-y-1" aria-label="Mobile links"><Link href="/search" onClick={closeDrawer} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"><Search size={17} /> Search</Link>{secondaryLinks.map(([label, href]) => <Link key={href} href={href} onClick={closeDrawer} className="block rounded-xl px-4 py-3 text-base text-gray-900 transition hover:bg-gray-100">{label}</Link>)}{isAdmin && <div className="mt-5 border-t border-gray-200 pt-4"><p className="px-4 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Management</p><Link href="/admin" onClick={closeDrawer} className="flex items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 font-bold text-forest hover:bg-emerald-100"><ShieldCheck size={18} /> Admin Dashboard</Link></div>}</nav>
      <div className="mt-auto border-t border-gray-200 pt-5"><Link href={email ? '/profile' : '/auth/login'} onClick={closeDrawer} className="primary-button w-full !rounded-xl">{email ? <><UserRound size={17} /> Open profile</> : 'Sign in / Register'}</Link>{email && <button onClick={logout} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"><LogOut size={16} /> Sign out</button>}</div>
    </aside></div>}
  </header>;
}
