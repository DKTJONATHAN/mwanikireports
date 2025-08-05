'use client';

import { useState, useEffect } from 'react';
import articles from '../../../content/articles.json';

export default function BreakingNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter only Breaking News posts, sorted by newest first
  const breakingNews = articles
    .filter(post => post.category === 'Breaking News')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Auto-rotate every 5 seconds if there are multiple breaking news items
  useEffect(() => {
    if (breakingNews.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Rotate every 5 seconds
      return () => clearInterval(interval);
    }
  }, [breakingNews.length]);

  // Don't render if no breaking news exists
  if (breakingNews.length === 0) return null;

  const currentNews = breakingNews[currentIndex];

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
      <div className="container mx-auto flex items-center">
        <span className="mr-3 font-bold">BREAKING:</span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee inline-block">
            <span className="mx-4">
              {currentNews.title}
              {breakingNews.length > 1 && (
                <span className="ml-2 text-xs opacity-80">
                  ({currentIndex + 1}/{breakingNews.length})
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}