'use client';

import { LogOut, Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/browser';

export function AdminTopbar({ email }: { email: string }) { const [open, setOpen] = useState(false); const router = useRouter(); async function signOut() { const client = createClient(); if (client) await client.auth.signOut(); router.replace('/admin/login'); router.refresh(); } return <header className="flex items-center justify-between border-b border-forest/10 bg-white/80 px-4 py-4 backdrop-blur sm:px-7"><button className="grid h-10 w-10 place-items-center rounded-xl text-forest hover:bg-cream lg:hidden" onClick={() => setOpen(!open)} aria-label="Admin menu"><Menu size={20} /></button><div className="mr-auto flex items-center gap-3 text-left" dir="ltr"><div><span className="block text-[10px] uppercase tracking-widest text-muted">Signed in as</span><strong className="text-sm text-forest">{email}</strong></div><button onClick={signOut} className="grid h-10 w-10 place-items-center rounded-xl text-forest hover:bg-gold/15" aria-label="Sign out"><LogOut size={17} /></button></div></header>; }
