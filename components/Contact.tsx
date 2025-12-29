"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Essential } from "@/utils/essentials";
import FAQSection from "./FAQSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: Essential.email,
      description: "We respond within a hour",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: Essential.phone,
      description: "We are available all day long",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      info:
        Essential.address.city +
        ", " +
        Essential.address.state +
        ", " +
        Essential.address.country +
        " - " +
        Essential.address.zipcode,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our products, need assistance
                with an order, or want to collaborate, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-light rounded-lg text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-primary font-medium">{item.info}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Preview */}
            <FAQSection />
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-2
    ${isSubmitting ? "opacity-70 cursor-not-allowed" : "group"}
  `}
                >
                  {isSubmitting ? (
                    <>
                      <span>Submitting...</span>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Response Time */}
            <div className="mt-8 p-4 bg-white rounded-xl border border-primary/20">
              <div className="flex items-start space-x-4">
                {/* Pulse Indicator */}
                <div className="relative flex items-center justify-center mt-1">
                  <span className="absolute inline-flex h-5 w-5 rounded-full bg-primary/40 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    Typical response time: 1-2 hours
                  </div>

                  <div className="text-sm text-gray-600 mt-1">
                    We personally review every message to recommend the right
                    product based on your skin or hair type.
                  </div>

                  <div className="mt-3 flex items-center gap-4">
                    <span className="text-xs text-gray-500">
                      Available during business hours
                    </span>

                    <a
  href={`tel:${Essential.phone}`}
  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline whitespace-nowrap"
>
  <Phone size={16} />
  Call now {Essential.phone}
</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
