import type { Metadata } from 'next';
import { AuthCard } from '@/components/AuthCard';

export const metadata: Metadata = { title: 'پاس ورڈ بھول گئے؟', description: 'اپنے password reset کرنے کا link حاصل کریں۔' };
export default function ForgotPasswordPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="forgot" /></div>; }
