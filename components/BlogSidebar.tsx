// /components/blog/BlogSidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Filter, 
  Flame, 
  TrendingUp, 
  Star, 
  Clock, 
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { getFeaturedIngredients } from '@/app/ingredients-data';

export default function BlogSidebar() {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState('all');
  const isBlogPost = pathname.includes('/blog/') && !pathname.endsWith('/blog');
  
  // Hide sidebar on individual blog post pages
  if (isBlogPost) {
    return null;
  }

  const categories = [
    { id: 'all', name: 'All Ingredients', count: 25, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'hair', name: 'Hair Care', count: 12, icon: <Flame className="w-4 h-4" /> },
    { id: 'skin', name: 'Skin Care', count: 8, icon: <Star className="w-4 h-4" /> },
    { id: 'wellness', name: 'Wellness', count: 5, icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const featuredIngredients = getFeaturedIngredients();

  return (
    <aside className="lg:w-1/4 space-y-6">
      {/* Filter Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-gray-900 text-lg">Filter by Category</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                activeFilter === category.id
                  ? 'bg-amber-50 text-amber-700'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 rounded-md ${
                  activeFilter === category.id ? 'bg-amber-100' : 'bg-gray-100'
                }`}>
                  {category.icon}
                </div>
                <span>{category.name}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeFilter === category.id
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Ingredients */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-lg">Featured Ingredients</h3>
          <Star className="w-5 h-5 text-amber-500" />
        </div>
        <div className="space-y-4">
          {featuredIngredients.slice(0, 5).map((ingredient) => (
            <Link
              key={ingredient.id}
              href={`/blog/${ingredient.slug}`}
              className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${ingredient.color} flex items-center justify-center text-xl`}>
                {ingredient.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  {ingredient.tamilName}
                </div>
                <div className="text-sm text-gray-500">{ingredient.englishName}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-gray-900 text-lg">Most Read</h3>
        </div>
        <div className="space-y-4">
          {['Hibiscus for Hair Growth', 'Neem for Clear Skin', 'Amla Health Benefits'].map((title, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div>
                <div className="font-medium text-gray-900 text-sm">{title}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-3">Get Weekly Wisdom</h3>
        <p className="text-sm opacity-90 mb-4">
          Subscribe to receive traditional Tamil beauty secrets directly in your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-amber-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </aside>
  );
}