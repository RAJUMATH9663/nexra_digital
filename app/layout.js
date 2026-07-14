import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.nexradigital.com'),
  title: {
    default: 'NEXRA DIGITAL | Turning Vision Into Digital Reality',
    template: '%s | NEXRA DIGITAL',
  },
  description:
    'NEXRA DIGITAL is a premium creative agency delivering photography, videography, branding, web & software development, and digital marketing that turns your vision into digital reality.',
  keywords: [
    'NEXRA DIGITAL', 'creative agency', 'branding agency', 'web development agency',
    'photography services', 'videography services', 'digital marketing agency', 'software development company',
  ],
  authors: [{ name: 'NEXRA DIGITAL' }],
  openGraph: {
    title: 'NEXRA DIGITAL | Turning Vision Into Digital Reality',
    description:
      'Photography, videography, branding, websites, software development & digital marketing — crafted by NEXRA DIGITAL.',
    url: 'https://www.nexradigital.com',
    siteName: 'NEXRA DIGITAL',
    images: [{ url: '/images/hero-background.svg', width: 1600, height: 900, alt: 'NEXRA DIGITAL' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXRA DIGITAL | Turning Vision Into Digital Reality',
    description: 'Photography, videography, branding, websites, software development & digital marketing.',
    images: ['/images/hero-background.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/images/logo-mark.svg',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NEXRA DIGITAL',
    description: 'Premium creative agency offering photography, videography, branding, web & software development and digital marketing.',
    url: 'https://www.nexradigital.com',
    slogan: 'Turning Vision Into Digital Reality',
    image: 'https://www.nexradigital.com/images/hero-background.svg',
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
