'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    default: "Jonathan Mwaniki News - Latest News & Insights in Kenya",
    template: "%s | Jonathan Mwaniki News",
  },
  description: "Stay informed with breaking news, in-depth analysis, sports, entertainment, technology, and expert opinions from Kenya and beyond at Jonathan Mwaniki News.",
  keywords: [
    "Kenya news",
    "breaking news",
    "journalism",
    "sports",
    "entertainment",
    "technology",
    "analysis",
    "Jonathan Mwaniki",
    "Nairobi news",
    "East Africa news",
  ],
  authors: [{ name: "Jonathan Mwaniki", url: "https://jonathanmwaniki.co.ke" }],
  creator: "Jonathan Mwaniki",
  publisher: "Jonathan Mwaniki News",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "Jonathan Mwaniki News - Latest News & Insights",
    description: "Your trusted source for breaking news, in-depth analysis, sports, entertainment, technology, and expert opinions in Kenya.",
    url: "https://jonathanmwaniki.co.ke",
    siteName: "Jonathan Mwaniki News",
    images: [
      {
        url: "https://jonathanmwaniki.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jonathan Mwaniki News Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Mwaniki News",
    description: "Get the latest news, analysis, sports, tech, and expert opinions from Kenya.",
    creator: "@maestropuns",
    images: ["https://jonathanmwaniki.co.ke/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jonathanmwaniki.co.ke",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/4a5d7e6f8b.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon?<generated>"
          type="image/png"
          sizes="180x180"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* Top Bar with Date, Weather, and Social Links */}
        <div className="hidden md:block bg-slate-900 text-slate-300 py-2 px-4 text-sm border-b border-slate-800">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <i className="far fa-calendar-alt mr-2"></i>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center">
                <i className="fas fa-thermometer-half mr-2"></i>
                Nairobi 24°C
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-slate-400">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
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
                    width={140}
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
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
                    { href: "/category/business", label: "Business", icon: "fas fa-chart-line" }, // Fixed syntax here
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
                  { href: "/category/business", label: "Business", icon: "fas fa-chart-line" }, // Fixed syntax here
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
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center mb-6">
                  <Image
                    src="/Jonathan-Mwaniki-logo.png"
                    alt="Jonathan Mwaniki News Logo"
                    width={180}
                    height={55}
                    className="h-12 w-auto brightness-0 invert"
                  />
                </Link>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Your trusted source for comprehensive news coverage, in-depth analysis, and expert insights from Kenya and the East African region.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-400 transition-all"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-all"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white">News Categories</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/category/breaking-news"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Breaking News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/politics"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Politics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/business"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/sports"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/entertainment"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category/technology"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Technology
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advertise"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Advertise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-slate-400 hover:text-white transition-colors flex items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Stay Updated</h4>
                <p className="text-slate-400 mb-6">Subscribe to our newsletter for breaking news alerts and daily updates.</p>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <i className="fas fa-envelope absolute right-3 top-3.5 text-slate-400"></i>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-slate-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
                <p>© {new Date().getFullYear()} Jonathan Mwaniki News. All rights reserved.</p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <span className="flex items-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Verified Publisher
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-award mr-2"></i>
                    Award-Winning Journalism
                  </span>
                </div>
              </div>
            </div>
          </div>
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
                aria-label={item.href.split("/")[1] || "Home"}
              >
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