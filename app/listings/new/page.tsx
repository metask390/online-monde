import type { Metadata } from 'next';
import { FormPanel } from '@/components/FormPanel';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';
import { CreateListingForm } from '@/components/PublicForms';
export const metadata: Metadata = { title: 'اپنی پوسٹ بنائیں', description: 'مویشی منڈی میں اپنی listing submit کریں۔' };
export default function NewListingPage() { return <div className="page-frame"><PageIntro kicker="sell with trust" title="اپنی پوسٹ بنائیں" description="درست معلومات اور واضح تصاویر کے ساتھ اپنی listing admin approval کے لیے بھیجیں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/listings/new" /><FormPanel title="Listing details" description="Submit کے بعد status pending رہے گا جب تک admin منظوری نہ دے۔"><CreateListingForm /></FormPanel></div></div>; }
