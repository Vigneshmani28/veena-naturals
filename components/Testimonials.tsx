"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Uthayanithi",
    content:
      "Veena Naturals products transformed my skincare routine. My skin has never looked better!",
    rating: 5,
    avatarColor: "bg-emerald-100",
  },
  {
    id: 2,
    name: "Vigneshwaran",
    content:
      "The essential oils are pure magic. Perfect for my meditation practice.",
    rating: 5,
    avatarColor: "bg-teal-100",
  },
  {
    id: 3,
    name: "Ganesh",
    content:
      "Finally, a brand that truly cares about ingredients. 100% natural and effective!",
    rating: 5,
    avatarColor: "bg-green-100",
  },
  {
    id: 4,
    name: "Sam Kilsan",
    content:
      "Love their commitment to sustainability. Great products, even better ethics.",
    rating: 4,
    avatarColor: "bg-primary-light",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-primary">Our Believers</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our growing community of customers who are discovering the
            Veena Naturals difference, one experience at a time.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 z-10">
            <Quote className="w-12 h-12 text-primary/20" />
          </div>

          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light/20 to-white p-8 md:p-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar & Rating */}
                    <div className="mb-6">
                      <div
                        className={`w-20 h-20 ${testimonial.avatarColor} rounded-full flex items-center justify-center mb-4 mx-auto`}
                      >
                        <div className="text-2xl font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-xl text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === i ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Repeat Customers" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
