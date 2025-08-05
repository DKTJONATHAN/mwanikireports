'use client';

import Image from 'next/image';
import { useState } from 'react';
import articles from '../../content/articles.json';
import Link from 'next/link';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'News', 'Breaking News', 'Sports', 'Entertainment', 'Tech', 'Opinions', 'Gossip'];

  // Filter posts by search query and category
  const filteredPosts = articles
    .filter(post => {
      const matchesQuery = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesCategory = selectedCategory === 'All' ? true : post.category === selectedCategory;
      return matchesQuery && matchesCategory;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="font-sans min-h-screen bg-gray-50 w-full max-w-none">
      {/* Search Header */}
      <div className="w-full bg-white py-8 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search News</h1>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <i className="fas fa-search absolute left-4 top-4 text-gray-400"></i>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="w-full px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
            </p>
          </div>

          {/* Post Grid */}
          {filteredPosts.length > 0 ? (
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
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No results found</h2>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>

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