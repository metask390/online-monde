import Link from 'next/link';
import { LockKeyhole } from 'lucide-react';

export function ProtectedNotice({ title = 'یہ حصہ لاگ اِن صارفین کے لیے ہے', description = 'اپنا پروفائل، پوسٹس، آرڈرز اور پیغامات دیکھنے کے لیے لاگ اِن کریں۔', redirect = '/' }: { title?: string; description?: string; redirect?: string }) {
  return <div className="soft-card flex flex-col items-center px-6 py-14 text-center"><span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold"><LockKeyhole size={24} /></span><h2 className="font-urdu text-2xl font-bold text-forest">{title}</h2><p className="mt-3 max-w-md font-urdu text-sm leading-8 text-muted">{description}</p><Link href={`/auth/login?redirect=${encodeURIComponent(redirect)}`} className="primary-button mt-6">لاگ اِن کریں</Link></div>;
}
