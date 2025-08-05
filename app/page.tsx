'use client';

import Image from 'next/image';
import { useState } from 'react';
import articles from '../content/articles.json';
import Link from 'next/link';

export default function Home() {
  const categories = ['All', 'News', 'Breaking News', 'Sports', 'Entertainment', 'Tech', 'Opinions', 'Gossip'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter and sort posts by date (latest first)
  const filteredPosts = selectedCategory === 'All'
    ? articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : articles.filter(post => post.category === selectedCategory)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured post (most recent)
  const featuredPost = articles[0];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Featured Post Section */}
      {selectedCategory === 'All' && (
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/3">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-2">
                  {featuredPost.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h1>
                <p className="text-gray-600 mb-4">{featuredPost.description}</p>
                <Link 
                  href={`/${featuredPost.category.toLowerCase().replace(' ', '-')}/${featuredPost.id}`}
                  className="inline-flex items-center text-red-600 font-medium"
                >
                  Read Full Story
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <Link 
                    href={`/${post.category.toLowerCase().replace(' ', '-')}/${post.id}`}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter for the latest news and updates delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-r-lg hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}