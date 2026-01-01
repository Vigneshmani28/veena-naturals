import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import GlobalLoader from "@/components/GlobalLoader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veenanaturals.in"),
  icons : {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.jpg",
  },
  title: {
    default: "Veena Naturals | Pure Ayurvedic Beauty & Skincare Products",
    template: "%s | Veena Naturals Ayurvedic Products",
  },
  description:
    "100% natural Ayurvedic face packs, hair oils & skincare products made with traditional herbal ingredients. Cruelty-free, chemical-free beauty solutions.",
  keywords: [
    "Ayurvedic beauty products",
    "natural face pack",
    "herbal hair oil",
    "organic skincare India",
    "Veena Naturals",
    "ayurvedic skincare",
    "natural beauty products",
    "herbal face pack",
    "ayurvedic hair oil",
    "chemical-free skincare",
    "Indian herbal products",
    "vegan beauty India"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Beauty & Personal Care',
  alternates: {
    canonical: 'https://veenanaturals.in',
  },
  openGraph: {
    title: "Veena Naturals | Pure Ayurvedic Beauty Products",
    description: "Discover 100% natural Ayurvedic face packs, hair oils & skincare. Traditional herbs, modern beauty.",
    url: "https://veenanaturals.in",
    siteName: "Veena Naturals",
    images: [
      {
        url: "https://veenanaturals.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veena Naturals Ayurvedic Beauty Products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veena Naturals | Ayurvedic Beauty & Skincare",
    description: "100% natural Ayurvedic skincare and haircare products. Pure herbs, visible results.",
    creator: "@veenanaturals",
    images: ["https://veenanaturals.in/images/logo/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/logo/logo.jpg" />
        <link rel="canonical" href="https://veenanaturals.in/" />
        <meta name="theme-color" content="#3B875F" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<GlobalLoader />}>
          {children}
          <StructuredData />
          <SpeedInsights />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
