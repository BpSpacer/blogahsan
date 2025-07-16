import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio'], 
      },
    ],
    sitemap: 'https://www.adsbyahsan.com/sitemap.xml',
    host: 'https://www.adsbyahsan.com',
  };
}
