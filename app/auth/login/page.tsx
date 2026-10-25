import type { Metadata } from 'next';
import { AuthCard } from '@/components/AuthCard';

export const metadata: Metadata = { title: 'لاگ اِن', description: 'Online Mandi میں لاگ اِن کریں۔' };
export default function LoginPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="login" /></div>; }
