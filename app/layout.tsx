'use client'; // Add this to enable client-side interactivity if needed

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Add for mobile menu toggle

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ... (unchanged metadata)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/4a5d7e6f8b.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon?<generated>" type="image/png" sizes="180x180" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}>
        {/* Top Bar with Date, Weather, and Social Links */}
        <div className="hidden md:block bg-slate-900 text-slate-300 py-2 px-4 text-sm border-b border-slate-800">
          {/* ... (unchanged top bar) */}
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo and Title */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center group">
                  <Image
                    src="/Jonathan-Mwaniki-logo.png"
                    alt="Jonathan Mwaniki News Logo"
                    width={140} // Reduced size for mobile
                    height={40}
                    className="h-10 w-auto transition-opacity group-hover:opacity-80"
                    priority
                  />
                </Link>
                <div className="ml-3">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Mwaniki Reports
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5">Your Trusted News Source</p>
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news, topics, or authors..."
                    className="pl-12 pr-4 py-2.5 border-2 border-slate-200 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <i className="fas fa-search absolute left-4 top-3 text-slate-400"></i>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <i className="fas fa-bell text-lg"></i>
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-3">
                <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <i className="fas fa-search text-lg"></i>
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <i className={isMenuOpen ? "fas fa-times text-lg" : "fas fa-bars text-lg"}></i>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <nav className="lg:hidden mt-4 pt-4 border-t border-slate-100 bg-white">
                <ul className="flex flex-col space-y-4 text-sm font-medium px-4 pb-4">
                  {[
                    { href: "/", label: "Home", icon: "fas fa-home" },
                    { href: "/category/breaking-news", label: "Breaking", icon: "fas fa-bolt", color: "text-red-600" },
                    { href: "/category/politics", label: "Politics", icon: "fas fa-landmark" },
                    { href: "/category/business", label: "Business", icon "fas fa-chart-line" },
                    { href: "/category/sports", label: "Sports", icon: "fas fa-futbol" },
                    { href: "/category/entertainment", label: "Entertainment", icon: "fas fa-film" },
                    { href: "/category/tech", label: "Technology", icon: "fas fa-microchip" },
                    { href: "/category/lifestyle", label: "Lifestyle", icon: "fas fa-heart" },
                    { href: "/category/opinions", label: "Opinion", icon: "fas fa-comment-alt" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`flex items-center text-slate-700 hover:text-blue-600 transition-colors ${item.color || ""}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className={`${item.icon} mr-2`}></i>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden lg:block mt-4 pt-4 border-t border-slate-100">
              <ul className="flex space-x-6 text-sm font-medium">
                {[
                  { href: "/", label: "Home", icon: "fas fa-home" },
                  { href: "/category/breaking-news", label: "Breaking", icon: "fas fa-bolt", color: "text-red-600 border-b-2 border-red-600" },
                  { href: "/category/politics", label: "Politics", icon: "fas fa-landmark" },
                  { href: "/category/business", label: "Business", icon: "fas fa-chart-line" },
                  { href: "/category/sports", label: "Sports", icon: "fas fa-futbol" },
                  { href: "/category/entertainment", label: "Entertainment", icon: "fas fa-film" },
                  { href: "/category/tech", label: "Technology", icon: "fas fa-microchip" },
                  { href: "/category/lifestyle", label: "Lifestyle", icon: "fas fa-heart" },
                  { href: "/category/opinions", label: "Opinion", icon: "fas fa-comment-alt" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center text-slate-700 hover:text-blue-600 pb-2 transition-colors ${item.color || ""}`}
                    >
                      <i className={`${item.icon} mr-2`}></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-slate-900 text-slate-300 py-16">
          {/* ... (unchanged footer) */}
        </footer>

        {/* Enhanced Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl md:hidden z-50 border-t border-slate-200">
          <div className="grid grid-cols-5 py-3">
            {[
              { href: "/", icon: "fas fa-home", color: "hover:text-blue-600" },
              { href: "/breaking", icon: "fas fa-bolt", color: "hover:text-red-600" },
              { href: "/categories", icon: "fas fa-th-large", color: "hover:text-blue-600" },
              { href: "/bookmarks", icon: "fas fa-bookmark", color: "hover:text-green-600" },
              { href: "/profile", icon: "fas fa-user", color: "hover:text-purple-600" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2 text-slate-600 ${item.color} transition-colors`}
             Have
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${item.icon} text-lg`}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}