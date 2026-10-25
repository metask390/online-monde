import type { Metadata } from 'next';
import { Camera, Save } from 'lucide-react';
import { FormField } from '@/components/FormField';
import { FormPanel } from '@/components/FormPanel';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'پروفائل', description: 'اپنے نام، شہر، bio اور WhatsApp معلومات manage کریں۔' };

export default function ProfilePage() { return <div className="page-frame"><PageIntro kicker="your account" title="پروفائل" description="اپنی public profile اور رابطے کی معلومات اپ ڈیٹ کریں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/profile" /><FormPanel title="پروفائل کی معلومات" description="Username read-only رہے گا؛ phone اور WhatsApp consent کے ساتھ محفوظ ہوں گے۔"><form className="grid gap-4 sm:grid-cols-2"><div className="flex items-center gap-4 sm:col-span-2"><span className="grid h-20 w-20 place-items-center rounded-3xl bg-forest text-3xl text-gold">♞</span><label className="secondary-button !rounded-xl !px-4 !py-2 text-xs"><Camera size={15} /> avatar بدلیں<input type="file" className="sr-only" accept="image/*" /></label></div><FormField label="Username"><input className="field bg-cream" value="@username" readOnly /></FormField><FormField label="پورا نام"><input className="field" placeholder="آپ کا نام" /></FormField><FormField label="شہر"><input className="field" placeholder="لاہور" /></FormField><FormField label="WhatsApp"><input className="field" placeholder="03xx-xxxxxxx" /></FormField><FormField label="Bio"><textarea className="field min-h-28 sm:col-span-2" placeholder="اپنے بارے میں مختصر تعارف..." /></FormField><button className="primary-button sm:col-span-2"><Save size={17} /> تبدیلیاں محفوظ کریں</button></form></FormPanel></div></div>; }
