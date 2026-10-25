import Link from 'next/link';
import { ArrowLeft, Inbox, SearchX } from 'lucide-react';

export function EmptyState({ title = 'ابھی یہاں کچھ موجود نہیں', description = 'جب نئی معلومات شامل ہوں گی تو وہ یہاں دکھائی دیں گی۔', actionHref, actionLabel, search = false }: { title?: string; description?: string; actionHref?: string; actionLabel?: string; search?: boolean }) {
  const Icon = search ? SearchX : Inbox;
  return <div className="soft-card flex flex-col items-center justify-center px-6 py-14 text-center"><span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-forest"><Icon size={25} /></span><h3 className="font-urdu text-xl font-bold text-forest">{title}</h3><p className="mt-3 max-w-md font-urdu text-sm leading-8 text-muted">{description}</p>{actionHref && actionLabel && <Link href={actionHref} className="primary-button mt-6">{actionLabel}<ArrowLeft size={16} /></Link>}</div>;
}
