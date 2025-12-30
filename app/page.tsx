import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Ingredients from "@/components/Ingredients";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Veena Naturals | Pure Ayurvedic Beauty Products"
        description="100% natural Ayurvedic face packs, hair oils & skincare. Traditional herbal ingredients for radiant skin & healthy hair. Free shipping across India."
        keywords={[
          "Ayurvedic beauty products",
          "natural face pack",
          "herbal hair oil",
          "organic skincare India",
          "buy Ayurvedic products online",
          "natural beauty products",
          "herbal skincare",
          "Ayurvedic face pack for glowing skin",
          "herbal hair oil for hair growth",
          "chemical-free beauty products",
        ]}
        canonicalUrl="https://veenanaturals.in"
        ogImage="https://veenanaturals.in/images/og-image.jpg"
      />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <WhyUs />
        <Ingredients />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
