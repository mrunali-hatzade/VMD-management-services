import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export const metadata = {
  metadataBase: new URL('https://www.vmdmanagementservices.com'),
  title: {
    default: 'VMD Management Services | Security & Facility Agency in Pune',
    template: '%s | VMD Management Services',
  },
  description: 'Premier security guards, housekeeping, and facility management agency in Pune. Police-verified guards, 24/7 support, and ISO 9001:2015 certified operations.',
  keywords: [
    'Security Agency Pune',
    'Security Guards Pune',
    'Housekeeping Services Pune',
    'Facility Management Pune',
    'Industrial Security Pune',
    'Corporate Security Pune',
    'Residential Security Pune',
    'Office Boy Services Pune'
  ].join(', '),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'VMD Management Services | Security & Facility Agency in Pune',
    description: 'Reliable Security Guards, Housekeeping & Facility Solutions for Residential, Commercial and Industrial Clients in Pune.',
    url: 'https://www.vmdmanagementservices.com',
    siteName: 'VMD Management Services',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMD Management Services | Security & Facility Agency in Pune',
    description: 'Premier security guards, housekeeping, and facility management agency in Pune. Police-verified guards, 24/7 support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VMD Management Services',
    image: 'https://www.vmdmanagementservices.com/logo.png',
    '@id': 'https://www.vmdmanagementservices.com',
    url: 'https://www.vmdmanagementservices.com',
    telephone: '+918459845730',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 VMD Hub, Business Lane',
      addressLocality: 'Pune',
      addressRegion: 'MH',
      postalCode: '411001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5204,
      longitude: 73.8567
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://wa.me/918799859129'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
