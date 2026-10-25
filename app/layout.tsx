import type { Metadata } from 'next';
import { Noto_Nastaliq_Urdu, Inter } from 'next/font/google';
import './globals.css';
import { HeaderNav } from '@/components/HeaderNav';
import { GlobalChrome } from '@/components/GlobalChrome';

const urdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-urdu',
  display: 'swap',
});

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'Online Mandi | Abuzuriaz Cattle Farm', template: '%s | Online Mandi' },
  description: 'Abuzuriaz Cattle Farm کی بااعتماد آن لائن منڈی — مویشی، دودھ اور فارم مصنوعات۔',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Online Mandi | Abuzuriaz Cattle Farm',
    description: 'منڈی کا بھروسہ، گھر کی آسانی۔',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ur" dir="rtl">
      <body className={`${urdu.variable} ${sans.variable} font-sans`}>
        <HeaderNav />
        <main>{children}</main>
        <GlobalChrome />
      </body>
    </html>
  );
}
