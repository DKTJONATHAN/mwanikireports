import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ... (keep your existing metadata)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* ... (keep your existing header and main content) */}

        {/* Mobile Bottom Navigation (Icon Only) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden flex justify-around py-3 z-50 border-t border-gray-200">
          <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-home text-xl"></i>
          </Link>
          <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-search text-xl"></i>
          </Link>
          {/* Hamburger Menu for Categories */}
          <div className="relative group">
            <button className="flex flex-col items-center text-gray-700 hover:text-red-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
            {/* Category Dropdown */}
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

        {/* Add this CSS for smooth dropdown animation */}
        <style jsx>{`
          .group-hover .hidden {
            display: none;
          }
          .group:hover .group-hover\:block {
            display: block;
            animation: fadeIn 0.2s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </body>
    </html>
  );
}