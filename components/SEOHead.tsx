import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  type?: 'article' | 'website' | 'product';
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://www.veenanaturals.in/images/og-image.jpg',
  keywords,
  publishedTime,
  modifiedTime,
  author = 'Veena Naturals',
  type = 'website',
}: SEOHeadProps) {
  const siteTitle = title 
    ? `${title} | Veena Naturals Ayurvedic Products` 
    : "Veena Naturals | Pure Ayurvedic Beauty & Skincare";

  const siteDescription = description || 
    "100% natural Ayurvedic face packs, hair oils & skincare products made with traditional herbal ingredients.";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords?.join(', ') || 'Ayurvedic beauty, natural skincare, herbal products'} />
      
      <link rel="canonical" href={canonicalUrl || 'https://www.veenanaturals.in'} />
      
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Veena Naturals" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta name="author" content={author} />}
      
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="copyright" content="Veena Naturals" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
    </Head>
  );
}