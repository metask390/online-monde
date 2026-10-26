import type { Metadata } from 'next';
import { Noto_Nastaliq_Urdu, Inter } from 'next/font/google';
import './globals.css';
import { HeaderNav } from '@/components/HeaderNav';
import { GlobalChrome } from '@/components/GlobalChrome';
import { LanguageProvider } from '@/components/LanguageProvider';
const urdu = Noto_Nastaliq_Urdu({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-urdu', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = { title: { default: 'Online Mandi | Abuzuriaz Dairy Farm', template: '%s | Online Mandi' }, description: 'A premium marketplace for livestock, fresh milk, and trusted farm connections from Abuzuriaz Dairy Farm.', metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), openGraph: { title: 'Online Mandi | Abuzuriaz Dairy Farm', description: 'Discover quality livestock, fresh milk, and direct farm connections from Abuzuriaz Dairy Farm.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" dir="ltr"><body className={`${urdu.variable} ${sans.variable} font-sans`}><LanguageProvider><HeaderNav /><main>{children}</main><GlobalChrome /></LanguageProvider></body></html>; }
