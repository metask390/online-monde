'use client';

import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Mail, ShieldCheck } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function AuthCard({ mode = 'login' }: { mode?: 'login' | 'register' | 'forgot' | 'reset' }) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent) { event.preventDefault(); setSubmitted(true); }
  const isRegister = mode === 'register';
  const isForgot = mode === 'forgot';
  const isReset = mode === 'reset';
  const title = isRegister ? 'نیا اکاؤنٹ بنائیں' : isForgot ? 'پاس ورڈ واپس حاصل کریں' : isReset ? 'نیا پاس ورڈ سیٹ کریں' : 'Online Mandi میں خوش آمدید';
  if (submitted) return <div className="soft-card mx-auto max-w-lg p-8 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-forest"><ShieldCheck size={24} /></span><h1 className="mt-5 font-urdu text-2xl font-bold text-forest">درخواست موصول ہو گئی</h1><p className="mt-3 font-urdu text-sm leading-8 text-muted">یہ auth flow اگلے مرحلے میں Supabase سے connect ہوگا۔ آپ کا UI state محفوظ ہے۔</p><Link href="/" className="primary-button mt-6">ہوم پیج پر جائیں <ArrowLeft size={16} /></Link></div>;
  return <div className="soft-card mx-auto max-w-lg p-6 sm:p-8"><div className="mb-7 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-forest text-2xl text-gold">♞</span><h1 className="mt-4 font-urdu text-2xl font-bold text-forest">{title}</h1><p className="mt-2 font-urdu text-sm text-muted">مویشی، دودھ اور فارم رابطے ایک جگہ</p></div><form onSubmit={submit} className="space-y-4">{isRegister && <><input className="field" placeholder="پورا نام" required /><input className="field" placeholder="موبائل نمبر / WhatsApp" required /></>}{!isReset && <input className="field" type="email" placeholder="ای میل" required />}{(isRegister || isReset) && <div className="relative"><input className="field pl-12" type={showPassword ? 'text' : 'password'} placeholder="پاس ورڈ" required minLength={6} /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-3 text-muted" aria-label="پاس ورڈ دکھائیں">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></div>}{isRegister && <input className="field" type="password" placeholder="پاس ورڈ دوبارہ لکھیں" required minLength={6} />}{isForgot && <p className="rounded-xl bg-gold/10 p-3 font-urdu text-xs leading-7 text-forest">آپ کے ای میل پر reset link بھیجا جائے گا۔</p>}<button className="primary-button w-full" type="submit">{isRegister ? 'رجسٹر کریں' : isForgot ? 'لنک بھیجیں' : isReset ? 'پاس ورڈ محفوظ کریں' : 'لاگ اِن کریں'} <ArrowLeft size={16} /></button>{!isForgot && !isReset && <button type="button" className="secondary-button w-full"><Mail size={16} /> Google کے ساتھ جاری رکھیں</button>}</form><div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-forest/75">{mode === 'login' && <><Link href="/auth/register" className="underline decoration-gold underline-offset-4">نیا اکاؤنٹ</Link><Link href="/auth/forgot-password" className="underline decoration-gold underline-offset-4">پاس ورڈ بھول گئے؟</Link></>}{mode === 'register' && <Link href="/auth/login" className="underline decoration-gold underline-offset-4">پہلے سے اکاؤنٹ ہے؟</Link>}</div></div>;
}
