import Link from 'next/link';
import { ArrowLeft, PhoneCall } from 'lucide-react';

export function ContactCta() {
  return <section className="relative overflow-hidden rounded-[2rem] bg-forest p-6 text-white sm:p-9"><div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-gold/30" /><div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-gold/20" /><div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><div className="section-kicker !text-gold">براہِ راست رابطہ</div><h2 className="font-urdu text-2xl font-bold leading-relaxed sm:text-3xl">کچھ خاص تلاش کر رہے ہیں؟</h2><p className="mt-2 max-w-xl font-urdu text-sm leading-8 text-white/70">اپنی ضرورت فارم کے ساتھ شیئر کریں۔ ہماری ٹیم آپ کی رہنمائی کرے گی۔</p></div><Link href="/contact-admin" className="gold-button shrink-0"><PhoneCall size={17} /> ایڈمن سے رابطہ کریں <ArrowLeft size={15} /></Link></div></section>;
}
