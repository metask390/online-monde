import type { Metadata } from 'next'; import { AuthCard } from '@/components/AuthCard';
export const metadata: Metadata = { title: 'Create account', description: 'Create an Online Mandi account.' };
export default function RegisterPage({ searchParams }: { searchParams: { redirect?: string } }) { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="register" redirectTo={searchParams.redirect || '/'} /></div>; }
