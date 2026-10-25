import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PageIntro({ kicker, title, description, backHref }: { kicker?: string; title: string; description?: string; backHref?: string }) {
  return <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="section-kicker">{kicker}</div><h1 className="section-title text-3xl sm:text-4xl">{title}</h1>{description && <p className="mt-3 max-w-2xl font-urdu text-sm leading-8 text-muted">{description}</p>}</div>{backHref && <Link href={backHref} className="secondary-button self-start !rounded-xl !px-4 !py-2 text-xs"><ArrowRight size={14} /> واپس</Link>}</div>;
}
