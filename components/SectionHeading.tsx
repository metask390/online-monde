import Link from 'next/link';

export function SectionHeading({ kicker, title, href, hrefLabel = 'سب دیکھیں' }: { kicker?: string; title: string; href?: string; hrefLabel?: string }) {
  return <div className="section-heading"><div><div className="section-kicker">{kicker}</div><h2 className="section-title gold-rule">{title}</h2></div>{href && <Link href={href} className="shrink-0 text-xs font-bold text-forest underline decoration-gold decoration-2 underline-offset-4">{hrefLabel}</Link>}</div>;
}
