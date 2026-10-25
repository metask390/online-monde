import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, LoaderCircle } from 'lucide-react';

export const metadata: Metadata = { title: 'اکاؤنٹ تصدیق', description: 'آپ کے اکاؤنٹ کی تصدیق جاری ہے۔' };
export default function AuthCallbackPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><div className="soft-card max-w-md p-8 text-center"><LoaderCircle className="mx-auto animate-spin text-gold" size={30} /><h1 className="mt-5 font-urdu text-2xl font-bold text-forest">آپ کا اکاؤنٹ تیار ہو رہا ہے</h1><p className="mt-3 font-urdu text-sm leading-8 text-muted">Supabase callback connection اگلے مرحلے میں مکمل ہوگا۔</p><Link href="/" className="primary-button mt-6">ہوم پیج پر جائیں <ArrowLeft size={16} /></Link></div></div>; }
