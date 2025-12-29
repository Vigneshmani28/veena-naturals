"use client";

import { ArrowRight, ChevronDown, Leaf, Play, Sprout } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light via-white to-emerald-50 overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"></div>

        {/* Leaf patterns */}
        <div className="absolute top-20 right-1/4 opacity-20">
          <Leaf
            size={120}
            className="text-primary rotate-12"
            strokeWidth={1.2}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold">
                100% Organic & Natural
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Pure Nature,
              <span className="text-primary block">Pure Care</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Discover our premium collection of hair oils, face packs, and
              natural care products, carefully crafted using time-tested
              ingredients. Experience the pure healing power of nature in every
              drop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <button className="btn-primary flex items-center justify-center space-x-2 group cursor-pointer">
                  <span>Explore Products</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <a href="https://www.instagram.com/veenanaturals.herbal/" target="_blank" rel="noopener noreferrer">
                <button className="btn-secondary flex items-center justify-center space-x-2 group cursor-pointer">
                  <Play className="w-5 h-5" />
                  <span>Watch Story</span>
                </button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  500+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-gray-600">Natural Ingredients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Product Showcase */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Main product image */}
              <div className="absolute inset-0">
                {/* Background Image */}
                <Image
                  src="/images/hero/hero.png"
                  alt="Premium Collection"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-emerald-300/10" />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-2">
                      Premium Collection
                    </h3>
                    <p className="opacity-90">
                      Spring {new Date().getFullYear()} Edition
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating product cards */}
              <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary/30 rounded-lg"></div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-accent-green/30 rounded-lg"></div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-full px-6 py-3 sm:px-8 sm:py-4 flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">✓</span>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  UDYAM Certified
                </div>
                <div className="text-xs sm:text-sm text-gray-500">By MSME</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-center justify-center">
          <ChevronDown className="w-4 h-4 text-primary" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
