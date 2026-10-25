'use client';

import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/browser';

const credentials = z.object({
  email: z.string().email('درست ای میل درج کریں'),
  password: z.string().min(6, 'پاس ورڈ کم از کم 6 حروف کا ہو'),
  confirm: z.string().optional(),
}).refine((value) => !value.confirm || value.password === value.confirm, {
  path: ['confirm'], message: 'دونوں پاس ورڈ ایک جیسے ہونے چاہییں',
});
const loginCredentials = z.object({ email: z.string().email('درست ای میل درج کریں'), password: z.string().min(6, 'پاس ورڈ کم از کم 6 حروف کا ہو') });

export function AuthCard({ mode = 'login' }: { mode?: 'login' | 'register' | 'forgot' | 'reset' }) {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const isRegister = mode === 'register';
  const isForgot = mode === 'forgot';
  const isReset = mode === 'reset';
  const title = isRegister ? 'نیا اکاؤنٹ بنائیں' : isForgot ? 'پاس ورڈ واپس حاصل کریں' : isReset ? 'نیا پاس ورڈ سیٹ کریں' : 'Online Mandi میں خوش آمدید';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage('');
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') || ''); const password = String(form.get('password') || ''); const confirm = String(form.get('confirm') || '');
    const client = createClient(); if (!client) { setMessage('Supabase configuration دستیاب نہیں۔'); return; }
    setBusy(true);
    try {
      if (isRegister) {
        const parsed = credentials.safeParse({ email, password, confirm }); if (!parsed.success) { setMessage(parsed.error.issues[0].message); return; }
        const { error } = await client.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } }); if (error) throw error;
        setMessage('اکاؤنٹ بن گیا ہے۔ اپنے ای میل سے تصدیق کریں۔');
      } else if (mode === 'login') {
        const parsed = loginCredentials.safeParse({ email, password }); if (!parsed.success) { setMessage(parsed.error.issues[0].message); return; }
        const { error } = await client.auth.signInWithPassword({ email, password }); if (error) throw error; window.location.href = '/';
      } else if (isForgot) {
        const parsed = z.string().email('درست ای میل درج کریں').safeParse(email); if (!parsed.success) { setMessage(parsed.error.issues[0].message); return; }
        const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth/reset-password` }); if (error) throw error;
        setMessage('Password reset link آپ کے ای میل پر بھیج دیا گیا ہے۔');
      } else {
        const parsed = z.string().min(6, 'پاس ورڈ کم از کم 6 حروف کا ہو').safeParse(password); if (!parsed.success) { setMessage(parsed.error.issues[0].message); return; }
        const { error } = await client.auth.updateUser({ password }); if (error) throw error; setMessage('پاس ورڈ محفوظ ہو گیا ہے۔');
      }
    } catch (error: any) { setMessage(error?.message || 'درخواست مکمل نہیں ہو سکی۔'); } finally { setBusy(false); }
  }

  async function google() { const client = createClient(); if (!client) { setMessage('Supabase configuration دستیاب نہیں۔'); return; } const { error } = await client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } }); if (error) setMessage(error.message); }
  return <div className="soft-card mx-auto max-w-lg p-6 sm:p-8"><div className="mb-7 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-forest text-2xl text-gold">♞</span><h1 className="mt-4 font-urdu text-2xl font-bold text-forest">{title}</h1><p className="mt-2 font-urdu text-sm text-muted">مویشی، دودھ اور فارم رابطے ایک جگہ</p></div><form onSubmit={submit} className="space-y-4"><input className="field" name="email" type="email" placeholder="ای میل" required />{!isForgot && <div className="relative"><input className="field pl-12" name="password" type={showPassword ? 'text' : 'password'} placeholder="پاس ورڈ" required minLength={6} /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-3 text-muted" aria-label="پاس ورڈ دکھائیں">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>}{isRegister && <input className="field" name="confirm" type="password" placeholder="پاس ورڈ دوبارہ لکھیں" required minLength={6} />}{message && <p className="rounded-xl bg-gold/10 p-3 font-urdu text-sm leading-7 text-forest">{message}</p>}<button disabled={busy} className="primary-button w-full" type="submit">{busy ? 'براہِ کرم انتظار کریں...' : isRegister ? 'رجسٹر کریں' : isForgot ? 'لنک بھیجیں' : isReset ? 'پاس ورڈ محفوظ کریں' : 'لاگ اِن کریں'} <ArrowLeft size={16} /></button>{!isForgot && !isReset && <button type="button" onClick={google} className="secondary-button w-full"><Mail size={16} /> Google کے ساتھ جاری رکھیں</button>}</form><div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-forest/75">{mode === 'login' && <><Link href="/auth/register" className="underline decoration-gold underline-offset-4">نیا اکاؤنٹ</Link><Link href="/auth/forgot-password" className="underline decoration-gold underline-offset-4">پاس ورڈ بھول گئے؟</Link></>}{mode === 'register' && <Link href="/auth/login" className="underline decoration-gold underline-offset-4">پہلے سے اکاؤنٹ ہے؟</Link>}</div></div>;
}
