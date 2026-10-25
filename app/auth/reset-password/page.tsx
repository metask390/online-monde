import type { Metadata } from 'next';
import { AuthCard } from '@/components/AuthCard';

export const metadata: Metadata = { title: 'نیا پاس ورڈ', description: 'اپنا نیا پاس ورڈ محفوظ کریں۔' };
export default function ResetPasswordPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="reset" /></div>; }
