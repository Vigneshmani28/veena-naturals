import { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery. We process all orders within 24 hours of placement."
    },
    {
      question: "Are your products certified?",
      answer: "Yes! Our products are certified organic by UDYAM(MSME). We also hold certifications for cruelty-free practices and sustainable sourcing. All certifications are available for viewing on our website."
    },
    {
      question: "Do you ship internationally?",
      answer: "We currently ship to over 50 countries worldwide. Shipping times vary by location from 7-14 business days for international orders. Customs and import duties may apply depending on your country's regulations."
    },
    {
      question: "Are your products tested on animals?",
      answer: "Never. We are proudly cruelty-free and certified by Leaping Bunny. We believe in ethical beauty and never test on animals at any stage of product development."
    },
    {
      question: "What ingredients do you use?",
      answer: "We use only natural, organic ingredients sourced from sustainable farms. All our products are free from parabens, sulfates, synthetic fragrances, and other harmful chemicals. Full ingredient lists are available on each product page."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-primary-light/30 rounded-2xl p-6">
      <h4 className="font-bold text-gray-900 text-xl mb-6">
        Frequently Asked Questions
      </h4>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between w-full p-5 text-left hover:bg-gray-50/50 transition-colors"
              aria-expanded={openItems.includes(index)}
            >
              <span className="font-semibold text-gray-900 pr-6">
                {faq.question}
              </span>
              
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <div className="p-1 bg-primary/10 rounded-full">
                    <Minus className="w-4 h-4 text-primary" />
                  </div>
                ) : (
                  <div className="p-1 bg-gray-100 rounded-full">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-48 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5">
                <div className="pt-2 pb-1 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;