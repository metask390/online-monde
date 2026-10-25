import type { Metadata } from 'next';
import { FormPanel } from '@/components/FormPanel';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { ProfileForm } from '@/components/PublicAccount';
export const metadata: Metadata = { title: 'پروفائل', description: 'اپنے نام، شہر، bio اور WhatsApp معلومات manage کریں۔' };
export default function ProfilePage() { return <div className="page-frame"><PageIntro kicker="your account" title="پروفائل" description="اپنی public profile اور رابطے کی معلومات اپ ڈیٹ کریں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/profile" /><FormPanel title="پروفائل کی معلومات" description="Username database trigger سے خودکار ہے؛ phone اور WhatsApp محفوظ ہوں گے۔"><ProfileForm /></FormPanel></div></div>; }
