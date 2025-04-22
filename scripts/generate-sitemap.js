// Using ES module syntax
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  const { blogSlugs, courseSlugs, certificationSlugs } = await fetchDynamicSlugs();
  
  const urls = [
    ...staticPaths.map(p => `${SITE_URL}${p}`),
    ...blogSlugs.map(slug => `${SITE_URL}/blog/${slug}`),
    ...courseSlugs.map(slug => `${SITE_URL}/courses/${slug}`),
    ...certificationSlugs.map(slug => `${SITE_URL}/certifications/${slug}`),
  ];
  
  // Get current date for lastmod
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  // Make sure the public directory exists
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  
  const publicPath = path.resolve(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated at public/sitemap.xml');
};

generateSitemap();
