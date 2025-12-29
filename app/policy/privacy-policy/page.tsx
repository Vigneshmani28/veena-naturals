import Address from "@/components/Address";
import { Essential } from "@/utils/essentials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Veena Naturals",
  description:
    "Privacy Policy of Veena Naturals – Handmade natural and herbal products.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6">
        <p>
          Veena Naturals (“we”, “our”, “us”) respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, and safeguard your
          information.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and shipping address when you contact us or place an
          order.
        </p>
        <p>
          We may also collect limited non-personal information such as browser
          type and pages visited, solely to improve our website experience.
        </p>

        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and fulfill orders</li>
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve our products and services</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties.
        </p>

        <h2 className="text-xl font-semibold">
          3. Handmade & Natural Products Disclaimer
        </h2>
        <p>
          Veena Naturals produces handmade, natural, and herbal products.
          Results may vary depending on individual skin type and usage.
          Customers are advised to perform a patch test before use.
        </p>

        <h2 className="text-xl font-semibold">4. Return / Refund Policy</h2>
        <p>
          Please see here our{" "}
          <a href="/policy/return-policy" className="text-primary underline">
            Return & Refund Policy
          </a>{" "}
          for details on returns and refunds.
        </p>

        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information.
          However, no method of transmission or storage is completely secure.
        </p>

        <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-xl font-semibold">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>

        <div className="bg-gray-50 border rounded-lg p-4">
          <Address
            email={Essential.email}
            phone={Essential.phone}
            address={Essential.address}
          />
        </div>
      </section>
    </main>
  );
}
