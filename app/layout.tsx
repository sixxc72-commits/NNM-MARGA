import type { Metadata, Viewport } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', display: 'swap' });

export const metadata: Metadata = {
  title: 'MARGA NANIME — Modern Anime Community',
  description:
    'MARGA NANIME adalah komunitas anime modern. Bergabung, berbagi, dan terhubung dengan sesama penggemar anime.',
  keywords: ['anime', 'komunitas anime', 'marga nanime', 'anime community'],
  openGraph: {
    title: 'MARGA NANIME',
    description: 'Komunitas anime modern. Bergabung dan terhubung.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'MARGA NANIME' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#06030d' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
