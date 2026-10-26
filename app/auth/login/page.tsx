import type { Metadata } from 'next'; import { AuthCard } from '@/components/AuthCard';
export const metadata: Metadata = { title: 'Sign in', description: 'Sign in to Online Mandi.' };
export default function LoginPage({ searchParams }: { searchParams: { redirect?: string } }) { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="login" redirectTo={searchParams.redirect || '/'} /></div>; }
