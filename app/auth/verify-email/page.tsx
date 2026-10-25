import type { Metadata } from 'next';
import Link from 'next/link';
import { MailCheck } from 'lucide-react';

export const metadata: Metadata = { title: 'ای میل verify کریں', description: 'اپنی ای میل verify کرنے کی ہدایات۔' };
export default function VerifyEmailPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><div className="soft-card max-w-md p-8 text-center"><MailCheck className="mx-auto text-gold" size={34} /><h1 className="mt-5 font-urdu text-2xl font-bold text-forest">اپنی ای میل چیک کریں</h1><p className="mt-3 font-urdu text-sm leading-8 text-muted">ہم نے verification link بھیجا ہے۔ Link کھول کر اپنا Online Mandi account فعال کریں۔</p><Link href="/auth/login" className="secondary-button mt-6">لاگ اِن پر واپس</Link></div></div>; }
