import { requireAdmin } from '@/lib/admin-auth';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTopbar } from '@/components/admin/AdminTopbar';

export default async function AdminProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) { const { user } = await requireAdmin(); return <div className="min-h-screen bg-cream" dir="ltr"><div className="flex min-h-screen"><AdminSidebar /><div className="min-w-0 flex-1"><AdminTopbar email={user.email || 'admin'} /><main className="mx-auto max-w-[1440px] p-4 sm:p-7" dir="rtl">{children}</main></div></div></div>; }
