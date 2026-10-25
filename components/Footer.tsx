import Link from 'next/link';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest px-4 pb-28 pt-12 text-white sm:px-6 md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><BrandMark /><p className="mt-5 max-w-sm font-urdu text-sm leading-8 text-white/70">منڈی کا بھروسہ، گھر کی آسانی۔ ابوزریاز کیٹل فارم سے مویشی، تازہ دودھ اور بااعتماد فارم رابطہ۔</p></div>
        <div><h3 className="font-urdu text-lg font-bold text-gold">فوری لنکس</h3><div className="mt-4 grid gap-3 text-sm text-white/70"><Link href="/available-items" className="hover:text-white">دستیاب اشیاء</Link><Link href="/livestock-market" className="hover:text-white">مویشی منڈی</Link><Link href="/milk" className="hover:text-white">تازہ دودھ</Link><Link href="/contact-admin" className="hover:text-white">ایڈمن سے رابطہ</Link></div></div>
        <div><h3 className="font-urdu text-lg font-bold text-gold">رابطہ</h3><div className="mt-4 space-y-3 text-sm text-white/70"><p className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> ابوزریاز کیٹل فارم، پاکستان</p><p className="flex items-center gap-2"><Phone size={16} className="text-gold" /> رابطہ جلد دستیاب ہوگا</p><p className="flex items-center gap-2"><Instagram size={16} className="text-gold" /> @abuzuriazfarm</p></div></div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-white/45">© {new Date().getFullYear()} Abuzuriaz Cattle Farm · Online Mandi</div>
    </footer>
  );
}
