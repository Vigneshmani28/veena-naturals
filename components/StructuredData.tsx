// components/StructuredData.tsx
import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Veena Naturals",
    "description": "Pure Ayurvedic beauty products and herbal skincare",
    "url": "https://www.veenanaturals.in",
    "logo": "https://www.veenanaturals.in/images/logo/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Your State",
      "addressLocality": "Your City"
    },
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.instagram.com/veenanaturals.herbal",
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}