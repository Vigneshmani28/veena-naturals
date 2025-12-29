import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Products from '@/components/Products';
import WhyUs from '@/components/WhyUs';
import Ingredients from '@/components/Ingredients';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}