'use client';

import { useState, useEffect } from 'react';
import articles from '../../../content/articles.json'; // Path from components/ to content/

export default function BreakingNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get latest 3 breaking news articles
  const breakingNews = articles
    .filter(post => post.category === 'News' || post.category === 'Breaking News')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Auto-rotate news every 3 seconds
  useEffect(() => {
    if (breakingNews.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [breakingNews.length]);

  // Don't render if no news
  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
      <div className="container mx-auto flex items-center">
        <span className="mr-3 font-bold">BREAKING:</span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee inline-block">
            <span className="mx-4">{breakingNews[currentIndex].title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}