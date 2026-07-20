import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export const metadata = {
  title: 'VMD Management Services | Security & Facility Agency in Pune',
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
  openGraph: {
    title: 'VMD Management Services | Security & Facility Agency in Pune',
    description: 'Reliable Security Guards, Housekeeping & Facility Solutions for Residential, Commercial and Industrial Clients in Pune.',
    url: 'https://vmdmanagementservices.com',
    siteName: 'VMD Management Services',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VMD Management Services',
    image: 'https://vmdmanagementservices.com/logo.png',
    '@id': 'https://vmdmanagementservices.com',
    url: 'https://vmdmanagementservices.com',
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
      </body>
    </html>
  );
}
