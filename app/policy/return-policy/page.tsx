import Address from "@/components/Address";
import { Essential } from "@/utils/essentials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Veena Naturals",
  description:
    "Return and Refund Policy of Veena Naturals – Herbal and handmade personal care products.",
};

export default function ReturnPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Return & Refund Policy
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6">
        <p>
          At <strong>Veena Naturals</strong>, customer satisfaction is very
          important to us. Since our products are herbal, natural, and personal
          care items, we follow strict quality and hygiene standards.
        </p>

        <h2 className="text-xl font-semibold">Eligibility for Returns</h2>
        <p>Returns will be accepted only under the following conditions:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Damaged product received</li>
          <li>Wrong product delivered</li>
          <li>Expired product at the time of delivery</li>
        </ul>

        <p className="text-sm text-gray-600">
          <strong>Note:</strong> An unboxing video is mandatory to process any
          return or refund request.
        </p>

        <h2 className="text-xl font-semibold">Non-Returnable Items</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Opened or used products</li>
          <li>Products damaged due to customer handling</li>
          <li>Products returned without original packaging</li>
          <li>Orders placed during sales or special offers</li>
        </ul>

        <h2 className="text-xl font-semibold">Return Request Timeline</h2>
        <p>
          Return requests must be raised within <strong>48 hours</strong> of
          delivery. Requests made after this period will not be accepted.
        </p>

        <h2 className="text-xl font-semibold">Refund Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Approved refunds will be processed within{" "}
            <strong>5–7 business days</strong>
          </li>
          <li>Refunds will be credited to the original payment method</li>
          <li>Shipping charges are non-refundable</li>
        </ul>

        <h2 className="text-xl font-semibold">Cancellation Policy</h2>
        <p>
          Orders can be cancelled only before shipping. Once the order is
          shipped, cancellation is not possible.
        </p>

        <h2 className="text-xl font-semibold">Contact for Returns</h2>
        <p>For return or refund support, please contact us at:</p>

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
