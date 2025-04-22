import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.cyberdefend.in';

const staticPaths = [
  '/',
  '/courses',
  '/certifications',
  '/blogs',
  '/careers',
  '/contact',
];

const fetchDynamicSlugs = async () => {
    // Simulated dynamic data (replace with real API calls or file reads)
    const blogs = [
      'ai-cybersecurity',
      'cloud-security',
      'ransomeware',
      'zerotrust'
    ];
  
  
    const courses = [
      'ethical-hacking-fundamentals',
      'intermediate-network-defense',
      'advanced-ethical-hacking',
      'cybersecurity-masterclass',
      'cloud-security-essentials'
    ];

    const certifications = [
        'ccsp',
        'certified-ethical-hacker',
        'cisa',
        'cisco-cyberops-associate',
        'cism',
        'cissp',
        'comptia-security-plus',
        'ecsa',
        'giac-security-essentials',
        'oscp'
    ];
  
    return {
      blogSlugs: blogs,
      courseSlugs: courses,
      certificationSlugs: certifications
    };
  };
  

const generateSitemap = async () => {
  const { blogSlugs, courseSlugs,certificationSlugs } = await fetchDynamicSlugs();

  const urls = [
    ...staticPaths.map(path => `${SITE_URL}${path}`),
    ...blogSlugs.map(slug => `${SITE_URL}/blog/${slug}`),
    ...courseSlugs.map(slug => `${SITE_URL}/courses/${slug}`),
    ...certificationSlugs.map(slug => `${SITE_URL}/certifications/${slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `
  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap.trim());
  console.log('✅ Sitemap generated at public/sitemap.xml');
};

generateSitemap();
