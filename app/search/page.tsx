import type { Metadata } from 'next';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';
import { PageIntro } from '@/components/PageIntro';

export const metadata: Metadata = { title: 'تلاش', description: 'Online Mandi پر listings Discover۔' };

export default function SearchPage() { return <div className="page-frame"><PageIntro kicker="find your match" title="Discover" description="Title، نسل یا City کے ذریعے listings Discover۔" /><div className="mx-auto max-w-3xl"><SearchBar /><div className="mt-8"><EmptyState search title="تلاش شروع کریں" description="اوپر search bar میں اپنی ضرورت لکھیں؛ approved listings کے نتائج یہاں دکھائی دیں گے۔" /></div></div></div>; }
