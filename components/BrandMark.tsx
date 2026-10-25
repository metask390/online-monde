import Link from 'next/link';

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Abuzuriaz Cattle Farm home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest text-xl text-gold shadow-lg shadow-forest/20 transition group-hover:rotate-[-4deg]">
        <span aria-hidden>♞</span>
        <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-cream bg-gold" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <strong className="block font-urdu text-lg font-bold text-forest">ابوزریاز کیٹل فارم</strong>
          <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-gold">Online Mandi</span>
        </span>
      )}
    </Link>
  );
}
