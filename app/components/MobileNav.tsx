'use client';

import Link from 'next/link';

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden flex justify-around py-3 z-50 border-t border-gray-200">
      <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-red-600">
        <i className="fas fa-home text-xl"></i>
      </Link>
      <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-red-600">
        <i className="fas fa-search text-xl"></i>
      </Link>
      <div className="relative group">
        <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
          <Link href="/category/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News</Link>
          <Link href="/category/breaking-news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Breaking</Link>
          <Link href="/category/sports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sports</Link>
          <Link href="/category/entertainment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Entertainment</Link>
          <Link href="/category/tech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tech</Link>
          <Link href="/category/opinions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opinions</Link>
        </div>
      </div>
    </div>
  );
}