"use client";

import { useState } from "react";
import {
  Star,
  ShoppingBag,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Essential } from "@/utils/essentials";

const products = [
  {
    id: 1,
    name: "Face Pack & Bath Powder",
    category: "Skincare & Body Care",
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviews: 128,
    imageColor: "bg-gradient-to-br from-emerald-100 to-primary/30",
    badge: "Best Seller",
    image: "/images/products/face_pack.png",
    ingredients: [
      "Pacha Payaru(Green Gram)",
      "Kasturi Manjal(Wild Turmeric)",
      "Roja Ithazh(Rose Petals)",
      "Avaram Poo(Tanner's Cassia Flower)",
      "Vettiver(Vetiver)",
      "Sembaruthi(Hibiscus)",
      "kadala Paruppu(Bengal Gram)",
      "Poolankizhangu(White Turmeric)",
      "Multhani Metti(Fuller's Earth)",
      "Veppilai(Neem leaves)",
      "Vasambu(Sweet Flag)",
      "Orange Peel",
      "Marikozhundhu(Davana)",
      "Magizham Poo(Spanish Cherry Flower)",
    ],
    get description() {
      return `Natural face pack with ${this.ingredients.length} herbal ingredients for glowing skin`;
    },
  },
  {
    id: 2,
    name: "Herbal Hair Oil",
    category: "Hair Care",
    price: 599,
    originalPrice: 899,
    rating: 4.6,
    reviews: 94,
    imageColor: "bg-gradient-to-br from-teal-100 to-emerald-200",
    badge: "New",
    image: "/images/products/hair_oil.png",
    ingredients: [
      "Semparuthi poo & ilai (Hibiscus flower & leaves)",
      "Karisalankanni(Bhringraj)",
      "Nellikkai(Amla)",
      "Kathalai(Aloevera)",
      "Veppilai(Neem)",
      "Maruthani(Henna)",
      "Karuveppilai(Curry leaves)",
      "Vendhaya(Funugreek)",
      "Karunjeeragam(Kalonji)",
      "Neelini(Indigo)",
      "Aamanakku(Castor oil)",
    ],
    get description() {
      return `Herbal hair oil with ${this.ingredients.length} herbal ingredients for glowing skin`;
    },
  },
];

const categories = ["All", "Skincare", "Hair Care", "Body Care"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) =>
          product.category.includes(selectedCategory)
        );

 const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => 
    (prev - 1 + filteredProducts.length) % filteredProducts.length
  );
};

  const handleWhatsAppClick = (product: (typeof products)[0]) => {
    const message = `Hello! I'm interested in purchasing:\n\n*${product.name}*\nPrice: ₹${product.price}\nOriginal Price: ₹${product.originalPrice}\n\nPlease provide more details about this product.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = Essential.phone; // Replace with your WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleViewClick = (productId: number) => {
    if (flippedCard === productId) {
      setFlippedCard(null);
    } else {
      setFlippedCard(productId);
    }
  };

  const handleCloseIngredients = () => {
    setFlippedCard(null);
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Our Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Discover our carefully curated selection of premium organic
            products, each crafted with nature's finest ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
                setFlippedCard(null);
              }}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-gray-700 hover:bg-primary-light hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              {/* Flip Container */}
              <div
                className={`relative w-full h-full transition-all duration-500 transform-style-3d ${
                  flippedCard === product.id ? "rotate-y-180" : ""
                }`}
                style={{ minHeight: "500px" }}
              >
                {/* Front of Card */}
                <div
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                    flippedCard === product.id
                      ? "opacity-0 invisible"
                      : "opacity-100 visible"
                  }`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Product Image */}
                    <div className="relative h-64">
                      <div
                        className={`absolute inset-0 ${product.imageColor} overflow-hidden`}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                          {product.badge}
                        </div>
                      )}
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button
                          onClick={() => handleViewClick(product.id)}
                          className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-110"
                        >
                          <Eye className="w-5 h-5 cursor-pointer" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₹{product.price}
                          </span>
                          <span className="text-gray-400 line-through ml-2">
                            ₹{product.originalPrice}
                          </span>
                        </div>
                        <button
                          onClick={() => handleWhatsAppClick(product)}
                          className="cursor-pointer btn-primary flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                          </svg>
                          <span>Buy on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 transform rotate-y-180 ${
                    flippedCard === product.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full p-6">
                    {/* Close Button */}
                    <button
                      onClick={handleCloseIngredients}
                      className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex-1 min-h-0">
                        <h4 className="text-lg font-semibold text-primary mb-4">
                          Key Ingredients
                        </h4>

                        {/* Scrollable Ingredients List */}
                        <div className="space-y-3 pr-2 overflow-y-auto max-h-full">
                          {product.ingredients.map((ingredient, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 bg-emerald-50 rounded-lg p-3"
                              style={{
                                animation: `slideIn 0.3s ease-out ${
                                  index * 0.1
                                }s both`,
                              }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-gray-700">
                                {ingredient}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <button
                          onClick={() => handleWhatsAppClick(product)}
                          className="cursor-pointer w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                          </svg>
                          <span>Buy on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  {/* Front View for Mobile */}
                  <div
                    className={`transition-all duration-300 ${
                      flippedCard === product.id
                        ? "opacity-0 scale-95 absolute"
                        : "opacity-100 relative"
                    }`}
                    style={
                      flippedCard === product.id
                        ? { pointerEvents: "none" }
                        : {}
                    }
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                      <div className="relative h-64">
                        <div
                          className={`absolute inset-0 ${product.imageColor} flex items-center justify-center`}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </div>

                        {/* View Button */}
                        <button
                          onClick={() => handleViewClick(product.id)}
                          className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors active:scale-95"
                        >
                          <Eye className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Product Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                            {Math.round(
                              (1 - product.price / product.originalPrice) * 100
                            )}
                            % OFF
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 pr-2">
                            {product.name}
                          </h3>
                          {/* Rating */}
                          <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                            <span className="text-sm font-semibold text-emerald-700">
                              4.8
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description ||
                            "Natural ingredients for healthy hair"}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold text-primary">
                                ₹{product.price}
                              </span>
                              <span className="text-gray-400 line-through">
                                ₹{product.originalPrice}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Free shipping • 30-day returns
                            </p>
                          </div>

                          <button
                            onClick={() => handleWhatsAppClick(product)}
                            className="cursor-pointer p-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back View for Mobile */}
                  <div
                    className={`transition-all duration-300 ${
                      flippedCard === product.id
                        ? "opacity-100 scale-100 relative"
                        : "opacity-0 scale-95 absolute"
                    }`}
                    style={
                      flippedCard !== product.id
                        ? { pointerEvents: "none" }
                        : {}
                    }
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                      {/* Fixed Header with Close Button */}
                      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">
                          Ingredients
                        </h3>
                        <button
                          onClick={handleCloseIngredients}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors active:scale-95"
                        >
                          <X className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>

                      <div className="p-6">
                        <div className="space-y-3 mb-8">
                          {product.ingredients.map((ingredient, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-100"
                              style={{
                                animation: `slideIn 0.3s ease-out ${
                                  index * 0.1
                                }s both`,
                              }}
                            >
                              <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-800 font-medium">
                                {ingredient}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-4 mb-6 border border-emerald-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            Benefits
                          </h4>
                          <p className="text-sm text-gray-600">
                            All ingredients are 100% natural, cruelty-free, and
                            environmentally friendly.
                          </p>
                        </div>

                        <button
                          onClick={() => handleWhatsAppClick(product)}
                          className="cursor-pointer w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl py-4 px-4 font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                          </svg>
                          <span>Buy Now on WhatsApp</span>
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-4">
                          Usually replies within 2 minutes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls - Always visible but conditionally enabled */}
          <div className="relative mt-6">
            <div className="flex items-center justify-between px-4">
              <button
                onClick={prevSlide}
                disabled={flippedCard !== null || currentSlide === 0}
                className={`p-3 rounded-full shadow-lg transition-all ${
                  flippedCard !== null || currentSlide === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 active:scale-95"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Indicators - Fixed positioning */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(filteredProducts.length))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    disabled={flippedCard !== null}
                    className={`w-8 h-2 rounded-full transition-all ${
                      currentSlide === i
                        ? "bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    } ${
                      flippedCard !== null
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={
                  flippedCard !== null ||
                  currentSlide >= filteredProducts.length - 1
                }
                className={`p-3 rounded-full shadow-lg transition-all ${
                  flippedCard !== null ||
                  currentSlide >= filteredProducts.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 active:scale-95"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Swipe Hint */}
            {flippedCard === null && (
              <p className="text-center text-sm text-gray-500 mt-4">
                ← Swipe or use buttons to navigate →
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
