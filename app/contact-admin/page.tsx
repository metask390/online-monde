import type { Metadata } from 'next';
import { FormPanel } from '@/components/FormPanel';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { ContactRequestForm } from '@/components/PublicForms';
export const metadata: Metadata = { title: 'Contact Admin', description: 'اپنی مویشی یا فارم مصنوعات کی ضرورت ایڈمن کے ساتھ شیئر کریں۔' };
export default function ContactAdminPage() { return <div className="page-frame"><PageIntro kicker="farm desk" title="Contact Admin" description="اپنی ضرورت، supply request یا farm product inquiry محفوظ طریقے سے بھیجیں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/contact-admin" /><FormPanel title="درخواست کی Description" description="Submit کے بعد request pending review میں جائے گی۔"><ContactRequestForm /></FormPanel></div></div>; }
