'use client';

import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load the BreakingNewsTicker to avoid SSR issues
const BreakingNewsTicker = dynamic(
  () => import('./components/BreakingNewsTicker'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
        <div className="container mx-auto flex items-center">
          <span className="mr-3 font-bold">BREAKING:</span>
          <div className="animate-pulse">Loading news...</div>
        </div>
      </div>
    )
  }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Mwaniki Report - Latest News & Gossip in Kenya",
    template: "%s | The Mwaniki Report",
  },
  description: "Stay updated with breaking news, sports, entertainment, tech, opinions, and gossip from Kenya and beyond.",
  keywords: [
    "Kenya news", "breaking news", "gossip", "sports",
    "entertainment", "tech", "opinions", "The Mwaniki Report"
  ],
  authors: [{ name: "Jonathan Mwaniki", url: "https://jonathanmwaniki.co.ke" }],
  openGraph: {
    title: "The Mwaniki Report",
    description: "Your source for breaking news in Kenya",
    url: "https://jonathanmwaniki.co.ke",
    siteName: "The Mwaniki Report",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "The Mwaniki Report",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mwaniki Report",
    description: "Latest news from Kenya",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/4a5d7e6f8b.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* Breaking News Ticker with Suspense fallback */}
        <Suspense fallback={
          <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
            Loading breaking news...
          </div>
        }>
          <BreakingNewsTicker />
        </Suspense>

        {/* Main Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center">
                  <h1 className="text-2xl font-bold text-red-600">The Mwaniki Report</h1>
                </Link>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="pl-10 pr-4 py-2 border rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition font-medium">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="mt-4 hidden md:block">
              <ul className="flex space-x-6 text-sm font-medium">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-red-600 pb-2">Home</Link>
                </li>
                <li>
                  <Link href="/category/news" className="text-red-600 border-b-2 border-red-600 pb-2">News</Link>
                </li>
                <li>
                  <Link href="/category/breaking-news" className="text-gray-700 hover:text-red-600 pb-2">Breaking</Link>
                </li>
                <li>
                  <Link href="/category/sports" className="text-gray-700 hover:text-red-600 pb-2">Sports</Link>
                </li>
                <li>
                  <Link href="/category/entertainment" className="text-gray-700 hover:text-red-600 pb-2">Entertainment</Link>
                </li>
                <li>
                  <Link href="/category/tech" className="text-gray-700 hover:text-red-600 pb-2">Tech</Link>
                </li>
                <li>
                  <Link href="/category/opinions" className="text-gray-700 hover:text-red-600 pb-2">Opinions</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center mb-4">
                  <h1 className="text-2xl font-bold text-red-600">The Mwaniki Report</h1>
                </Link>
                <p className="text-gray-400 mb-4">Your trusted news source in Kenya</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              {/* Footer columns... */}
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} The Mwaniki Report. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Mobile Bottom Navigation (Icons Only) */}
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
              {/* Other category links... */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}