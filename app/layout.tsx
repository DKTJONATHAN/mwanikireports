'use client';

import Image from 'next/image';
import { useState } from 'react';
import articles from '../content/articles.json';
import Link from 'next/link';

export default function Home() {
  const categories = [
    { name: 'All', icon: 'fas fa-globe' },
    { name: 'Breaking News', icon: 'fas fa-bolt' },
    { name: 'Politics', icon: 'fas fa-landmark' },
    { name: 'Business', icon: 'fas fa-chart-line' },
    { name: 'Sports', icon: 'fas fa-futbol' },
    { name: 'Entertainment', icon: 'fas fa-film' },
    { name: 'Tech', icon: 'fas fa-microchip' },
    { name: 'Lifestyle', icon: 'fas fa-heart' },
    { name: 'Opinions', icon: 'fas fa-comment-alt' }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter and sort posts by date (latest first)
  const filteredPosts = selectedCategory === 'All'
    ? [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : articles.filter(post => post.category === selectedCategory)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured post (most recent)
  const featuredPost = filteredPosts[0];
  
  // Top stories (next 4 posts)
  const topStories = filteredPosts.slice(1, 5);
  
  // Regular posts (remaining posts)
  const regularPosts = filteredPosts.slice(5);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Breaking News': 'bg-red-600',
      'Politics': 'bg-blue-600',
      'Business': 'bg-green-600',
      'Sports': 'bg-orange-600',
      'Entertainment': 'bg-purple-600',
      'Tech': 'bg-indigo-600',
      'Lifestyle': 'bg-pink-600',
      'Opinions': 'bg-yellow-600',
      'News': 'bg-slate-600'
    };
    return colors[category] || 'bg-slate-600';
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section with Featured Post */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="lg:flex">
              <div className="lg:w-3/5 relative">
                <div className="relative h-64 lg:h-96">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1.5 ${getCategoryColor(featuredPost.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      <i className="fas fa-star mr-1.5"></i>
                      FEATURED
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1.5 ${getCategoryColor(featuredPost.category)} text-white text-xs font-semibold rounded-full`}>
                    <i className="fas fa-bolt mr-1.5"></i>
                    {featuredPost.category.toUpperCase()}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h1>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-slate-500 text-sm">
                    <i className="fas fa-clock mr-2"></i>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <i className="fas fa-eye mr-2"></i>
                    2.1k views
                  </div>
                </div>
                <Link 
                  href={`/${featuredPost.category.toLowerCase().replace(' ', '-')}/${featuredPost.id}`}
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl group"
                >
                  Read Full Story
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <i className="fas fa-filter mr-2 text-blue-600"></i>
            Browse Categories
          </h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-3 pb-2">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:shadow-md'
                  }`}
                >
                  <i className={`${category.icon} mr-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Stories Section */}
      {selectedCategory === 'All' && topStories.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
              <i className="fas fa-fire mr-3 text-red-500"></i>
              Trending Stories
            </h2>
            <Link href="/trending" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topStories.map((post, index) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 ${getCategoryColor(post.category)} text-white text-xs font-semibold rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-bold">
                    #{index + 2}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center">
                      <i className="fas fa-calendar mr-1"></i>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Link 
                      href={`/${post.category.toLowerCase().replace(' ', '-')}/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center group"
                    >
                      Read More
                      <i className="fas fa-arrow-right ml-1 text-xs group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center">
            <i className="fas fa-newspaper mr-3 text-blue-600"></i>
            {selectedCategory === 'All' ? 'Latest News' : `${selectedCategory} News`}
          </h2>
          <div className="text-sm text-slate-500">
            {filteredPosts.length} articles found
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-1 ${getCategoryColor(post.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center text-xs text-slate-500">
                    <i className="fas fa-clock mr-1.5"></i>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <Link 
                    href={`/${post.category.toLowerCase().replace(' ', '-')}/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center group/link"
                  >
                    Read More
                    <i className="fas fa-arrow-right ml-1.5 text-xs group-hover/link:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 9 && (
          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* Enhanced Newsletter Subscription */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <i className="fas fa-envelope text-4xl mb-4 opacity-80"></i>
              <h2 className="text-3xl font-bold mb-4">Never Miss a Story</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Join over 10,000 readers who get breaking news, in-depth analysis, and exclusive content delivered directly to their inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                />
                <i className="fas fa-envelope absolute right-3 top-3.5 text-slate-400"></i>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-200 text-xs mt-4">
              <i className="fas fa-shield-alt mr-1"></i>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}