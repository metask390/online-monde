import { AdminEmpty } from '@/components/admin/AdminEmpty';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { AdminNotificationForm } from '@/components/admin/AdminNotificationForm';
import { FormPanel } from '@/components/FormPanel';
import { requireAdmin } from '@/lib/admin-auth';

export default async function AdminNotificationsPage() { const { adminClient } = await requireAdmin(); const { data } = adminClient ? await adminClient.from('notifications').select('id,title,body,created_at,profiles(username)').order('created_at', { ascending: false }).limit(20) : { data: [] }; return <><AdminPageHeader title="Notifications" description="Username search یا all users کو Urdu notification بھیجیں۔" /><div className="grid gap-7 xl:grid-cols-[.8fr_1.2fr]"><FormPanel title="Send notification"><AdminNotificationForm /></FormPanel><div className="rounded-2xl border border-forest/10 bg-white/70 p-5 sm:p-7"><h2 className="font-urdu text-xl font-bold text-forest">Recently sent</h2>{data?.length ? <div className="mt-5 space-y-3">{data.map((row: any) => <div key={row.id} className="rounded-xl bg-cream p-4"><strong className="text-forest">{row.title}</strong><p className="mt-1 text-sm text-muted">{row.body}</p></div>)}</div> : <div className="mt-5"><AdminEmpty title="Notifications خالی ہیں" /></div>}</div></div></>; }
