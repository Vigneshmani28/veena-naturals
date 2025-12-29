import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import GlobalLoader from "@/components/GlobalLoader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Veena Naturals | Pure Ayurvedic Beauty Products",
    template: "%s | Veena Naturals",
  },
  description:
    "Veena Naturals offers 100% natural Ayurvedic face packs and hair oils made from traditional herbal ingredients.",
  keywords: [
    "Ayurvedic beauty products",
    "natural face pack",
    "herbal hair oil",
    "organic skincare India",
    "Veena Naturals",
  ],
  authors: [{ name: "Veena Naturals" }],
  creator: "Veena Naturals",
  metadataBase: new URL("https://www.veena-naturals.vercel.app"),
  openGraph: {
  title: "Veena Naturals | Pure Ayurvedic Beauty",
  description:
    "Natural face packs and hair oils crafted with traditional herbs.",
  url: "https://www.veena-naturals.vercel.app",
  siteName: "Veena Naturals",
  images: [
    {
      url: "https://www.veena-naturals.vercel.app/images/og-image.jpg",
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
  title: "Veena Naturals | Ayurvedic Beauty",
  description:
    "100% natural Ayurvedic skincare and haircare products.",
  images: [
    "https://www.veena-naturals.vercel.app/images/og-image.jpg",
  ],
},

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<GlobalLoader />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
