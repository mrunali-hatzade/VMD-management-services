export default function sitemap() {
  const baseUrl = 'https://www.vmdmanagementservices.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/services/security-guards',
    '/services/housekeeping-services',
    '/services/office-boys',
    '/services/supervisors',
    '/services/facility-management',
    '/services/industrial-security',
    '/services/residential-security',
    '/services/corporate-security',
    '/industries',
    '/gallery',
    '/careers',
    '/blog',
    '/contact',
  ];

  return routes.map((route) => {
    let priority = 0.8;
    let changeFrequency = 'monthly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/services' || route === '/contact') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.startsWith('/services/')) {
      priority = 0.85;
      changeFrequency = 'monthly';
    } else if (route === '/about' || route === '/industries' || route === '/careers') {
      priority = 0.75;
      changeFrequency = 'monthly';
    } else if (route === '/blog' || route === '/gallery') {
      priority = 0.65;
      changeFrequency = 'weekly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
