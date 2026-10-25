import Link from 'next/link';
import { ArrowUpLeft, MapPin, Phone, Tag } from 'lucide-react';
import type { Listing } from '@/types/domain';
import { buildWhatsAppUrl, categoryIcons, categoryLabels, formatPKR, isValidPakistaniNumber } from '@/lib/format';
import { MessageSellerButton } from '@/components/PublicForms';

export function ListingCard({ listing, compact = false }: { listing: Listing; compact?: boolean }) {
  const canWhatsapp = listing.whatsappPublished && isValidPakistaniNumber(listing.whatsappNumber);
  return <article className={`soft-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 ${compact ? '' : 'h-full'}`}>
    <Link href={`/listing/${listing.id}`} className="relative block aspect-[4/3] overflow-hidden bg-cream-deep">
      {listing.imageUrl ? <img src={listing.imageUrl} alt={listing.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,97,.3),transparent_35%),linear-gradient(135deg,#e9dfc6,#c6d4be)] text-6xl grayscale-[.15]" aria-label="تصویر دستیاب نہیں">{categoryIcons[listing.category]}</div>}
      <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 font-urdu text-xs font-bold text-forest shadow">{categoryLabels[listing.category]}</span>
      {listing.negotiable && <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold text-forest-dark">Price قابلِ گفتگو</span>}
    </Link>
    <div className="p-4">
      <div className="flex items-start justify-between gap-3"><div><h3 className="font-urdu text-lg font-bold leading-8 text-forest">{listing.title}</h3><p className="mt-1 flex items-center gap-1 text-xs text-muted"><MapPin size={13} /> {listing.city || 'City درج نہیں'}</p></div><span className="shrink-0 rounded-xl bg-forest/7 px-2 py-1 text-sm font-bold text-forest">{formatPKR(listing.price)} <small className="font-urdu font-normal">روپے</small></span></div>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">{listing.breed && <span className="rounded-lg bg-cream px-2 py-1"><Tag size={11} className="ml-1 inline" />{listing.breed}</span>}{listing.age && <span className="rounded-lg bg-cream px-2 py-1">عمر: {listing.age}</span>}{listing.gender && <span className="rounded-lg bg-cream px-2 py-1">{listing.gender}</span>}</div>
      <div className="mt-5 flex items-center gap-2"><Link href={`/listing/${listing.id}`} className="primary-button min-w-0 flex-1 !rounded-xl !px-3 !py-2.5 text-xs">Description دیکھیں <ArrowUpLeft size={14} /></Link>{canWhatsapp && <a href={buildWhatsAppUrl(listing.whatsappNumber!, listing.title, listing.id)} target="_blank" rel="noreferrer" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#25D366]/12 text-[#128C7E] transition hover:bg-[#25D366]/20" aria-label="WhatsApp پر رابطہ"><Phone size={17} /></a>}<MessageSellerButton listingId={listing.id} /> </div>
    </div>
  </article>;
}
