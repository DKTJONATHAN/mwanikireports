'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import articles from './content/articles.json';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(articles);

  // Categories for filtering
  const categories = [
    'All',
    'Breaking News',
    'News',
    'Sports',
    'Entertainment',
    'Tech',
    'Opinions',
  ];

  // Filter posts when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(articles);
    } else {
      setFilteredPosts(articles.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Featured posts: isFeatured or Breaking News, sorted by date, top 3
  const featuredPosts = articles
    .filter(post => post.isFeatured || post.category === 'Breaking News')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Trending posts: Top 5 by views, exclude featured posts, fall back to date
  const trendingPosts = articles
    .filter(post => !featuredPosts.some(featured => featured.id === post.id))
    .sort((a, b) => (b.views || 0) - (a.views || 0) || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  console.log('Featured Posts:', featuredPosts);
  console.log('Trending Posts:', trendingPosts);

  return (
    <div className="min-h-screen">
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <Link key={post.id} href={`/post/${post.id}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-red-600 uppercase">{post.category}</span>
                    <h3 className="text-lg font-semibold text-slate-900 mt-2">{post.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{post.description}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto scrollbar-hidden">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          {selectedCategory === 'All' ? 'Latest News' : `${selectedCategory} News`}
        </h2>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg">No articles found for {selectedCategory}.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link key={post.id} href={`/post/${post.id}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-red-600 uppercase">{post.category}</span>
                    <h3 className="text-lg font-semibold text-slate-900 mt-2">{post.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{post.description}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Trending Posts Section */}
      {trendingPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trendingPosts.map(post => (
              <Link key={post.id} href={`/post/${post.id}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={125}
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-red-600 uppercase">{post.category}</span>
                    <h3 className="text-md font-semibold text-slate-900 mt-2 line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-slate-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}