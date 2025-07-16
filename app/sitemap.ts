import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `
  {
    "courses": *[_type == "courses"] {
      slug,
      publishedAt
    },
    "apps": *[_type == "apps"] {
      slug,
      publishedAt
    },
    "shopify": *[_type == "shopify"] {
      slug,
      publishedAt
    },
    "wordpress": *[_type == "wordpress"] {
      slug,
      publishedAt
    },
    "softwares": *[_type == "softwares"] {
      slug,
      publishedAt
    }
  }
  `;

  const { courses, apps, shopify, wordpress, softwares } = await client.fetch(query);

  const baseUrl = "https://www.adsbyahsan.com";

  const courseUrls = courses.map((item: any) => ({
    url: `${baseUrl}/courses/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
  }));

  const appUrls = apps.map((item: any) => ({
    url: `${baseUrl}/apps/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
  }));

  const shopifyUrls = shopify.map((item: any) => ({
    url: `${baseUrl}/shopify/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
  }));

  const wordpressUrls = wordpress.map((item: any) => ({
    url: `${baseUrl}/wordpress/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
  }));

  const softwareUrls = softwares.map((item: any) => ({
    url: `${baseUrl}/softwares/${item.slug.current}`,
    lastModified: new Date(item.publishedAt),
  }));

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/courses`, lastModified: new Date() },
    { url: `${baseUrl}/apps`, lastModified: new Date() },
    { url: `${baseUrl}/shopify`, lastModified: new Date() },
    { url: `${baseUrl}/wordpress`, lastModified: new Date() },
    { url: `${baseUrl}/softwares`, lastModified: new Date() },

    // Add static trust/legal pages
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/dmca`, lastModified: new Date() },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date() },

    ...courseUrls,
    ...appUrls,
    ...shopifyUrls,
    ...wordpressUrls,
    ...softwareUrls,
  ];
}
