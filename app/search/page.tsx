'use client';

import Image from 'next/image';
import { useState } from 'react';
import articles from '../../content/articles.json';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'News', 'Breaking News', 'Sports', 'Entertainment', 'Tech', 'Opinions'];

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
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Search News</h1>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Post Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.category}</span>
                <h2 className="text-xl font-semibold text-foreground mt-1">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{post.description}</p>
                <div className="mt-4 flex gap-2">
                  {/* Placeholder for social sharing */}
                  <button className="text-sm text-gray-500 hover:text-foreground">Share</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">
            No posts found matching your criteria.
          </p>
        )}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 sm:hidden flex justify-around py-2 border-t border-gray-200 dark:border-gray-700">
        <a href="/" className="flex flex-col items-center text-foreground">
          <i className="fa fa-home text-xl"></i>
          <span className="text-xs">Home</span>
        </a>
        <a href="/search" className="flex flex-col items-center text-foreground">
          <i className="fa fa-search text-xl"></i>
          <span className="text-xs">Search</span>
        </a>
        <a href="/categories" className="flex flex-col items-center text-foreground">
          <i className="fa fa-list text-xl"></i>
          <span className="text-xs">Categories</span>
        </a>
      </nav>
    </div>
  );
}