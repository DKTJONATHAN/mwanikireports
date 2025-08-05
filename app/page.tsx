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
    ? [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : articles.filter(post => post.category === selectedCategory)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured post (most recent)
  const featuredPost = filteredPosts[0];

  return (
    <div className="font-sans min-h-screen bg-gray-50 w-full max-w-none">
      {/* Featured Post Section */}
      {selectedCategory === 'All' && (
        <section className="w-full px-0">
          <div className="bg-white rounded-none shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
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
      <section className="w-full bg-white py-4 shadow-sm sticky top-0 z-10">
        <div className="overflow-x-auto px-4">
          <div className="flex space-x-2 w-max">
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
      <section className="w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white ${index < filteredPosts.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : ''}`}
            >
              <div className="p-4">
                <div className="relative h-48 w-full mb-4">
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
      <section className="w-full bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
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