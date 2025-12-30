"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { Essential } from "@/utils/essentials";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Phone number configuration
  const phoneNumber = Essential.phone.primary;

  // Update active link on scroll
  const updateActiveLink = useCallback(() => {
    const sections = navItems.map((item) => item.href);
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const { offsetTop, offsetHeight } = element as HTMLElement;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          if (activeLink !== section) {
            setActiveLink(section);
          }
          break;
        }
      }
    }
  }, [activeLink]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      updateActiveLink();
    };

    updateActiveLink();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveLink]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center space-x-3 group"
            aria-label="Go to Veena Naturals home page"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <Image
                src="/images/logo/logo.jpg"
                alt="Veena Naturals logo - Ayurvedic beauty brand"
                width={64}
                height={64}
                className="object-contain rounded-full"
                priority
              />
            </div>

            <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
              VeenaNaturals
            </span>
          </Link>

          {/* Desktop Navigation - Central Container with proper margin */}
          <div className="hidden md:flex flex-1 justify-center items-center ml-12">
            <div className="flex items-center space-x-6 flex-nowrap">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                      activeLink === item.href
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </a>

                  {activeLink === item.href && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Right Side - Shop Button & Phone */}
          <div className="hidden md:flex items-center ml-12">
            <a
              href={`tel:${Essential.phone.primary}`}
              className="
      flex items-center gap-3
      px-5 py-2.5
      rounded-full
      bg-primary
      text-white
      hover:bg-primary/90
      transition-all duration-200
      shadow-md hover:shadow-lg
      whitespace-nowrap
      text-sm font-semibold
    "
            >
              <Phone size={18} />

              <div className="flex flex-col leading-tight text-sm opacity-90">
                <span>{Essential.phone.primary}</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button - Only menu icon */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Slides from right */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <Link
            href="/#home"
            aria-label="Go to Veena Naturals home page"
            className="flex items-center space-x-3 group"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/images/logo/logo.jpg"
                alt="Veena Naturals logo - natural Ayurvedic skincare brand"
                width={48}
                height={48}
                className="object-contain rounded-full transition-transform group-hover:scale-105"
                priority
              />
            </div>

            <span className="text-xl font-bold text-gray-800 transition-colors group-hover:text-primary">
              VeenaNaturals
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="h-full overflow-y-auto p-6">
          {/* Phone Number Section */}
          <div className="mb-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone size={22} className="text-primary" />
              </div>

              <div>
                <p className="text-sm text-gray-600">Call us anytime</p>

                <div className="flex flex-col leading-tight">
                  <a
                    href={`tel:${Essential.phone.primary}`}
                    className="text-lg font-bold text-primary hover:underline"
                  >
                    {Essential.phone.primary}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center justify-between w-full px-5 py-4 rounded-lg transition-all duration-200 text-lg ${
                  activeLink === item.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <span className="font-medium">{item.label}</span>
                {activeLink === item.href && (
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} VeenaNaturals. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
