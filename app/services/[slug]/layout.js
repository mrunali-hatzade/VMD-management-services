const serviceSeoData = {
  'security-guards': {
    title: 'Security Guard Services in Pune | VMD Management Services',
    description: 'Police-verified, physically fit, and trained security guards in Pune for 24/7 vigil across gated housing societies, corporate offices, and factories in Sadashiv Peth & Mundhwa.',
    keywords: 'security guards pune, best security services in pune, security services near me in pune, vmd management, vmd services, security agency pune',
  },
  'housekeeping-services': {
    title: 'Housekeeping Services in Pune | VMD Management Services',
    description: 'Professional corporate housekeeping services in Pune. Deep office cleaning, floor scrubbing, sanitation, and hygienic facility upkeep.',
    keywords: 'housekeeping services in pune, best housekeeping services in pune, vmd services, vmd management in pune, cleaning services near me',
  },
  'office-boys': {
    title: 'Office Boy Services in Pune | VMD Management Services',
    description: 'Polite and reliable office boy support staff services in Pune for pantry management, beverage serving, document movement, and administrative assistance.',
    keywords: 'office boy services pune, pantry staff pune, support staff pune, vmd management, vmd services near me in pune',
  },
  'supervisors': {
    title: 'Security & Facility Supervisors in Pune | VMD Management Services',
    description: 'Experienced security and facility supervisors in Pune for guard shift briefings, night patrols, site audits, and quality assurance.',
    keywords: 'security supervisor pune, facility supervisor pune, vmd management in pune, security services near me in pune',
  },
  'facility-management': {
    title: 'Facility Management Services in Pune | VMD Management Services',
    description: 'Integrated facility management services in Pune combining security guarding, housekeeping, soft services, and utility upkeep under one SLA.',
    keywords: 'facility management services pune, best services in pune, vmd management in pune, vmd services, facility services near me',
  },
  'industrial-security': {
    title: 'Industrial & Factory Security Services in Pune | VMD Management Services',
    description: 'Industrial security guard agency in Pune offering gate pass verification, raw material audits, weighbridge logs, and factory loss prevention.',
    keywords: 'industrial security pune, factory security guard agency, vmd management, best security services in pune, security services',
  },
  'residential-security': {
    title: 'Residential Society Security Guards in Pune | VMD Management Services',
    description: 'Residential housing society security guard services in Pune, Sadashiv Peth & Mundhwa. App-based visitor tracking, parking order, and 24/7 gate vigil.',
    keywords: 'residential security guards pune, housing society security pune, vmd management in pune, security services near me in pune',
  },
  'corporate-security': {
    title: 'Corporate & IT Park Security Services in Pune | VMD Management Services',
    description: 'Corporate reception security and access control services for IT parks and commercial buildings in Pune with trained front-desk guards.',
    keywords: 'corporate security pune, IT park security guard, best security services in pune, vmd services, vmd management',
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const seo = serviceSeoData[slug] || {
    title: 'Security & Facility Services in Pune | VMD Management Services',
    description: 'Professional security guard and facility management services in Pune by VMD Management Services.',
    keywords: 'vmd services, vmd management in pune, best security services in pune, security services near me in pune',
  };

  const canonicalUrl = `https://www.vmdmanagementservices.com/services/${slug || ''}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
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
