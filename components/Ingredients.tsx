'use client';

import { useState } from 'react';
import { 
  Flower2, Leaf, Sprout, Droplets, ThermometerSun, 
  LeafyGreen, Gem, Citrus, Sparkles, Heart
} from 'lucide-react';
import { additionalIngredients, traditionalIngredients } from '@/utils/ingredients';



const Ingredients = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(0);
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  
  const visibleIngredients = showAllIngredients 
    ? [...traditionalIngredients, ...additionalIngredients]
    : traditionalIngredients;

  const handleReadMore = (blogSlug: string) => {
    // In a real application, this would navigate to your blog
    window.location.href = `/blog/${blogSlug}`;
    // Or with Next.js: router.push(`/blog/${blogSlug}`);
  };

  return (
    <section id="ingredients" className="py-12 md:py-20 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="font-semibold">Traditional Wisdom</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ancient <span className="text-green-600">Tamil</span> Ingredients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Centuries-old traditional ingredients from Tamil Nadu, each with proven 
            benefits for hair, skin, and overall wellness. Click any ingredient to learn more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Ingredients Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {visibleIngredients.map((ingredient, index) => (
                <button
                  key={`${ingredient.name}-${index}`}
                  onClick={() => setSelectedIngredient(
                    showAllIngredients ? index : index
                  )}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    selectedIngredient === index 
                      ? 'ring-2 ring-green-500 transform scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <div className={`p-3 rounded-full bg-gradient-to-br ${ingredient.color} mb-4 w-fit mx-auto`}>
                    {ingredient.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-500 text-sm text-center mb-3">
                    {ingredient.englishName}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {ingredient.benefits.slice(0, 2).map((benefit, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                    {ingredient.benefits.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{ingredient.benefits.length - 2}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Show More/Less Button */}
            {!showAllIngredients && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllIngredients(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  <span>Learn More About All 25 Health Ingredients</span>
                  <Leaf className="w-4 h-4" />
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  Explore our complete collection of traditional Tamil ingredients
                </p>
              </div>
            )}

            {showAllIngredients && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllIngredients(false)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <span>Show Fewer Ingredients</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Selected Ingredient Details */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-24">
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${visibleIngredients[selectedIngredient].color}`}>
                {visibleIngredients[selectedIngredient].icon}
              </div>
              
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {visibleIngredients[selectedIngredient].name}
            </h3>
            <p className="text-green-600 font-medium mb-6">
              {visibleIngredients[selectedIngredient].englishName}
            </p>
            
            <p className="text-gray-600 mb-6">
              {visibleIngredients[selectedIngredient].name} is a treasured ingredient in 
              traditional Tamil medicine and skincare. Known for its remarkable properties, 
              it has been used for generations to promote health and beauty naturally.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="font-bold text-gray-900">Key Benefits:</h4>
              <ul className="space-y-2">
                {visibleIngredients[selectedIngredient].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;