import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: [
      "https://www.veenanaturals.in/sitemap.xml",
      "https://www.veenanaturals.in/sitemap-products.xml",
    ],
    host: "www.veenanaturals.in",
  };
}