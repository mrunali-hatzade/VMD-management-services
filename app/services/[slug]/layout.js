const serviceSeoData = {
  'security-guards': {
    title: 'Security Guard Services in Pune | VMD Management Services',
    description: 'Police-verified, physically fit, and trained security guards in Pune for 24/7 vigil across gated housing societies, corporate offices, and factories in Sadashiv Peth & Mundhwa.',
  },
  'housekeeping-services': {
    title: 'Housekeeping Services in Pune | VMD Management Services',
    description: 'Professional corporate housekeeping services in Pune. Deep office cleaning, floor scrubbing, sanitation, and hygienic facility upkeep.',
  },
  'office-boys': {
    title: 'Office Boy Services in Pune | VMD Management Services',
    description: 'Polite and reliable office boy support staff services in Pune for pantry management, beverage serving, document movement, and administrative assistance.',
  },
  'supervisors': {
    title: 'Security & Facility Supervisors in Pune | VMD Management Services',
    description: 'Experienced security and facility supervisors in Pune for guard shift briefings, night patrols, site audits, and quality assurance.',
  },
  'facility-management': {
    title: 'Facility Management Services in Pune | VMD Management Services',
    description: 'Integrated facility management services in Pune combining security guarding, housekeeping, soft services, and utility upkeep under one SLA.',
  },
  'industrial-security': {
    title: 'Industrial & Factory Security Services in Pune | VMD Management Services',
    description: 'Industrial security guard agency in Pune offering gate pass verification, raw material audits, weighbridge logs, and factory loss prevention.',
  },
  'residential-security': {
    title: 'Residential Society Security Guards in Pune | VMD Management Services',
    description: 'Residential housing society security guard services in Pune, Sadashiv Peth & Mundhwa. App-based visitor tracking, parking order, and 24/7 gate vigil.',
  },
  'corporate-security': {
    title: 'Corporate & IT Park Security Services in Pune | VMD Management Services',
    description: 'Corporate reception security and access control services for IT parks and commercial buildings in Pune with trained front-desk guards.',
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const seo = serviceSeoData[slug] || {
    title: 'Security & Facility Services in Pune | VMD Management Services',
    description: 'Professional security guard and facility management services in Pune by VMD Management Services.',
  };

  const canonicalUrl = `https://www.vmdmanagementservices.com/services/${slug || ''}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: 'VMD Management Services',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  };
}

export default function ServiceSlugLayout({ children }) {
  return children;
}
