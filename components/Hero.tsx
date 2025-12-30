"use client";

import {
  ArrowRight,
  ChevronDown,
  Leaf,
  Play,
  Sprout,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FEATURES } from "@/lib/featureFlags";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
 const [year, setYear] = useState<number>(2026);

  useEffect(() => {
  setMounted(true);
}, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-light via-white to-emerald-50 overflow-hidden pt-16"
    >
      {/* Background elements - Enhanced for New Year */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl"></div>

        {/* New Year themed particles - Render only on client */}
        {FEATURES.NEW_YEAR_THEME && mounted && (
          <>
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-twinkle"></div>
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-300 rounded-full animate-twinkle"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-twinkle"
              style={{ animationDelay: "1s" }}
            ></div>
          </>
        )}

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
            {/* New Year Tagline */}
            {FEATURES.NEW_YEAR_THEME && (
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-emerald-50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-amber-700 font-semibold">
                  🎉Happy New Year {year}!
                </span>
              </div>
            )}

            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold">
                100% Organic & Natural
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Pure Nature,
              <span className="text-primary block">
                Pure Care
                {FEATURES.NEW_YEAR_THEME && (
                  <span className="text-amber-600 text-4xl align-super ml-2">
                    🎇
                  </span>
                )}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Discover our premium collection of hair oils, face packs, and
              natural care products, carefully crafted using time-tested
              ingredients. Experience the pure healing power of nature in every
              drop.
              {FEATURES.NEW_YEAR_THEME && (
                <span className="block mt-2 font-semibold text-amber-700">
                  Start your {year} with natural
                  wellness!
                </span>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <button
                  className={`flex items-center justify-center space-x-2 group cursor-pointer px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    FEATURES.NEW_YEAR_THEME
                      ? "bg-gradient-to-r from-primary to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      : "btn-primary"
                  }`}
                >
                  <span>Explore Products</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/veenanaturals.herbal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`flex items-center justify-center space-x-2 group cursor-pointer px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    FEATURES.NEW_YEAR_THEME
                      ? "border-2 border-amber-400 text-amber-500 bg-transparent hover:bg-orange-50 hover:shadow-md hover:scale-105"
                      : "btn-secondary"
                  }`}
                >
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
              {FEATURES.NEW_YEAR_THEME && (
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg border border-amber-200">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">
                    New!
                  </div>
                  <div className="text-amber-700">Year Collection</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Hero Image/Product Showcase */}
          <div className="relative">
            <div
              className={`relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl ${
                FEATURES.NEW_YEAR_THEME
                  ? "ring-2 ring-amber-300 ring-opacity-50"
                  : ""
              }`}
            >
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-emerald-300/5" />

                {/* New Year Overlay */}
                {FEATURES.NEW_YEAR_THEME && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-emerald-400/5"></div>
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-2">
                      Premium Collection
                    </h3>
                    <p className="opacity-90">
                      Spring {year} Edition
                    </p>
                    {FEATURES.NEW_YEAR_THEME && (
                      <div className="mt-4 inline-block bg-gradient-to-r from-amber-400/20 to-yellow-300/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-amber-200">
                          ✨ New Year Launch ✨
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating product cards */}
              <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary/30 rounded-lg">
                  {FEATURES.NEW_YEAR_THEME && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">NEW</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl shadow-xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-accent-green/30 rounded-lg">
                  {FEATURES.NEW_YEAR_THEME && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">
                        {year}
                      </span>
                    </div>
                  )}
                </div>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 rounded-full border border-primary/40 flex items-start justify-center overflow-hidden">
          <Leaf className="w-4 h-4 text-primary animate-[drop_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
