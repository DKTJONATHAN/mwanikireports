'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import articles from '../../content/articles.json';
import type { NextPage } from 'next';

// Define the props type for the dynamic route
interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CategoryPage: NextPage<CategoryPageProps> = async ({ params }) => {
  const router = useRouter();
  const { category } = await params; // Unwrap the Promise

  // Decode category and ensure it matches your categories
  const validCategories = ['News', 'Breaking News', 'Sports', 'Entertainment', 'Tech', 'Opinions'];
  const decodedCategory = decodeURIComponent(category).replace(/-/g, ' ');
  if (!validCategories.includes(decodedCategory)) {
    router.push('/'); // Redirect to homepage if category is invalid
    return null;
  }

  // Filter and sort posts by category and date (latest first)
  const filteredPosts = articles
    .filter(post => post.category === decodedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-foreground capitalize">{decodedCategory}</h1>
      </header>

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
            No posts found in this category.
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
};

export default CategoryPage;