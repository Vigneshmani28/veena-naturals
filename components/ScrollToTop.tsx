"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const progress = (scrolled / (docHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Circle around button */}
      <div
        className={`
        fixed z-40 transition-all duration-500 ease-out
        ${
          isVisible
            ? "opacity-100 scale-100 bottom-4 right-4 md:bottom-6 md:right-6"
            : "opacity-0 scale-50 -bottom-10 right-4 md:right-6 pointer-events-none"
        }
      `}
      >
        {/* Circular Progress Background */}
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#059669"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * scrollProgress) / 100}
            className="transition-all duration-300"
          />
        </svg>

        {/* Button in center */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 m-auto w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </>
  );
}
