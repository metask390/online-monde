import type { Metadata } from 'next';
import { AuthCard } from '@/components/AuthCard';

export const metadata: Metadata = { title: 'رجسٹر', description: 'Online Mandi پر نیا اکاؤنٹ بنائیں۔' };
export default function RegisterPage() { return <div className="page-frame flex min-h-[70vh] items-center justify-center"><AuthCard mode="register" /></div>; }
