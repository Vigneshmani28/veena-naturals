"use client";

import Link from "next/link";
import { Leaf, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 px-6">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Leaf className="w-8 h-8 text-green-700" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold text-green-800">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s take you back to something natural and beautiful.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <Link
            href="/#products"
            className="inline-flex items-center px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-100 transition"
          >
            Explore Products
          </Link>
        </div>

        {/* Brand */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} VeenaNaturals
        </p>
      </div>
    </div>
  );
}
