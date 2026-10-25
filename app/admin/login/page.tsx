import type { Metadata } from 'next';
import { AdminLoginForm } from '@/components/admin/AdminLoginForm';
import { adminLoginError } from '@/lib/admin-auth';

export const metadata: Metadata = { title: 'Admin Login', description: 'Authorized Online Mandi admin access' };
export default function AdminLoginPage({ searchParams }: { searchParams: { error?: string } }) { return <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(201,169,97,.25),transparent_35%),#f5f0e1] p-4"><AdminLoginForm error={adminLoginError(searchParams.error)} /></div>; }
