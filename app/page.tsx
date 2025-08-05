'use client';

import Image from 'next/image';
import { useState } from 'react';
import articles from '../content/articles.json';

export default function Home() {
  const categories = ['All', 'News', 'Breaking News', 'Sports', 'Entertainment', 'Tech', 'Opinions'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter and sort posts by date (latest first)
  const filteredPosts = selectedCategory === 'All'
    ? articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : articles.filter(post => post.category === selectedCategory).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Jonathan Mwaniki Reports</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Your Source for Breaking News and Gossip in Kenya</p>
      </header>

      {/* Category Filter */}
      <nav className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-foreground text-background'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Post Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredPosts.map(post => (
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
                {/* AddThis Social Sharing */}
                <div
                  className="addthis_inline_share_toolbox"
                  data-url={`https://jonathanmwaniki.co.ke/${post.category.toLowerCase().replace(' ', '-')}/${post.id}`}
                  data-title={post.title}
                  data-description={post.description}
                ></div>
              </div>
            </div>
          </div>
        ))}
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

      {/* AddThis Script */}
      <script
        type="text/javascript"
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-66f3f2f0e6d9c1b6"
        async
      ></script>
    </div>
  );
}