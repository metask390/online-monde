import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Plus } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';
import { ProtectedNotice } from '@/components/ProtectedNotice';

export const metadata: Metadata = { title: 'پیغامات', description: 'فروخت کنندگان اور ایڈمن کے ساتھ پیغامات۔' };

export default function MessagesPage() { return <div className="page-frame"><PageIntro kicker="private conversations" title="پیغامات" description="اپنی conversations، unread messages اور listing inquiries manage کریں۔" /><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr]"><ProtectedNotice redirect="/messages" /><section className="soft-card p-5 sm:p-7"><div className="mb-6 flex items-center justify-between"><h2 className="font-urdu text-xl font-bold text-forest">Conversations</h2><Link href="/contact-admin" className="secondary-button !rounded-xl !px-3 !py-2 text-xs"><Plus size={14} /> نئی inquiry</Link></div><EmptyState title="ابھی کوئی conversation نہیں" description="کسی listing پر Message Seller دبانے کے بعد chat یہاں ظاہر ہوگی۔" /></section></div></div>; }
