import Link from 'next/link';
import { ArrowRight, SearchX } from 'lucide-react';

export default function NotFound() { return <div className="page-frame flex min-h-[65vh] items-center justify-center"><div className="max-w-md text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gold/15 text-forest"><SearchX size={28} /></span><h1 className="mt-6 font-urdu text-3xl font-bold text-forest">یہ صفحہ نہیں ملا</h1><p className="mt-3 font-urdu text-sm leading-8 text-muted">ممکن ہے listing ہٹا دی گئی ہو یا link درست نہ ہو۔</p><Link href="/" className="primary-button mt-6"><ArrowRight size={16} /> ڈیش بورڈ پر جائیں</Link></div></div>; }
