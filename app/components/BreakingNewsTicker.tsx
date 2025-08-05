'use client';

import { useState, useEffect } from 'react';

// Define type for article data
type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
};

export default function BreakingNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [breakingNews, setBreakingNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        // Dynamically import the JSON file
        const { default: articles } = await import('../../../content/articles.json');
        
        // Filter and sort breaking news
        const filteredNews = articles
          ?.filter((post: Article) => post.category === 'Breaking News')
          ?.sort((a: Article, b: Article) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          ) || [];

        setBreakingNews(filteredNews);
      } catch (error) {
        console.error('Error loading articles:', error);
        setBreakingNews([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadArticles();
  }, []);

  // Auto-rotate every 5 seconds if there are multiple breaking news items
  useEffect(() => {
    if (breakingNews.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [breakingNews.length]);

  // Don't render if loading or no breaking news exists
  if (isLoading || breakingNews.length === 0) return null;

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