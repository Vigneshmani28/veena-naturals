import { Essential } from "@/utils/essentials";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Leaf,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";
import Address from "./Address";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const productCategories = [
    "Skincare",
    "Hair Care",
    "Body Care",
    "New Arrivals",
  ];

  const companyLinks = [
    "Our Story",
    "Sustainability",
    "Careers",
    "Press",
    "FAQ",
    "Return Policy",
    "Privacy Policy",
    "UDYAM Certificate",
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/veenanaturals.herbal/",
      label: "Instagram",
      hoverClass: "hover:bg-orange-600",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
        </svg>
      ),
      href: `https://wa.me/${Essential.phone.primary.replace(/[^\d]/g, "")}`,
      label: "WhatsApp",
      hoverClass: "hover:bg-green-600",
    },
  ];

  // Replace with your actual certificate PDF path
  const certificatePdf = "/certificates/veena-naturals-udyam.pdf";

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Veena Naturals Logo"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain rounded-full"
                  priority
                />
              </div>
              <span className="text-2xl font-bold">VeenaNaturals</span>
            </div>
            <p className="text-gray-400 mb-6">
              Pure, organic products for a healthier you and a happier planet.
              Join us in our mission to bring nature's best to your doorstep.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-gray-800 rounded-lg transition-colors ${social.hoverClass}`}
                  aria-label={social.label || "Social Media"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Address</div>
                  <Address
                    email={Essential.email}
                    phone={{
                      primary: Essential.phone.primary,
                      secondary: Essential.phone.secondary,
                    }}
                    address={Essential.address}
                    className="text-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VeenaNaturals. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {companyLinks.slice(4).map((link) => (
                <a
                  key={link}
                  href={
                    link === "FAQ"
                      ? "#contact"
                      : link === "Privacy Policy"
                      ? "/policy/privacy-policy"
                      : link === "UDYAM Certificate"
                      ? certificatePdf
                      : link === "Return Policy"
                      ? "/policy/return-policy"
                      : "#"
                  }
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center text-sm text-gray-400 gap-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary fill-primary" /> For Beauty
              Lovers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
