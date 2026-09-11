import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'Masti.pk | Pakistan’s #1 Discreet Sexual Wellness Store',
  description:
    'Shop authentic Durex, Masti, Josh condoms, delay formulas, and intimate lubricants in Pakistan. 100% discreet packaging in plain brown boxes with nationwide Cash on Delivery (COD).',
  keywords: [
    'condoms pakistan',
    'durex pakistan',
    'masti condoms',
    'josh condoms',
    'delay condoms pakistan',
    'discreet delivery karachi lahore islamabad',
    'lubricants pakistan',
    'sexual wellness pakistan',
  ],
  authors: [{ name: 'Masti.pk' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#08090d] text-slate-100 antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
