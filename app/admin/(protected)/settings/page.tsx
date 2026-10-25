import { AdminPageHeader } from '@/components/admin/AdminPageHeader';
import { AdminSettingsForm } from '@/components/admin/AdminSettingsForm';
import { FormPanel } from '@/components/FormPanel';
import { requireAdmin } from '@/lib/admin-auth';

export default async function AdminSettingsPage() { const { adminClient } = await requireAdmin(); const { data } = adminClient ? await adminClient.from('settings').select('key,value').in('key', ['admin_whatsapp', 'farm_info', 'contact_email', 'delivery_areas']) : { data: [] }; const values = Object.fromEntries((data || []).map((item: any) => [item.key, item.value])); return <><AdminPageHeader title="Settings" description="Public farm contact، admin WhatsApp اور delivery defaults configure کریں۔ ہر save audit log میں جائے گا۔" /><div className="max-w-3xl"><FormPanel title="Farm settings"><AdminSettingsForm defaults={values} /></FormPanel></div></>; }
