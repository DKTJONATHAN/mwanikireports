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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900`}>
        
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-2 px-4 text-sm">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center hover:text-white transition-colors">
                <i className="far fa-calendar-alt mr-2 text-blue-400"></i>
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center hover:text-white transition-colors">
                <i className="fas fa-thermometer-half mr-2 text-green-400"></i>
                Nairobi 24°C
              </span>
              <span className="flex items-center text-yellow-400">
                <i className="fas fa-bolt mr-2"></i>
                Breaking News Updates
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-slate-400">Connect with us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-red-400 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-slate-400 hover:text-pink-400 hover:scale-110 transition-all duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center group">
                  <div className="relative">
                    <Image
                      src="/Jonathan-Mwaniki-logo.png"
                      alt="Jonathan Mwaniki News Logo"
                      width={180}
                      height={55}
                      className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  </div>
                </Link>
                <div className="ml-4 hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Mwaniki Reports
                  </h1>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Your Trusted News Source</p>
                </div>
              </div>
              
              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search breaking news, stories..."
                    className="pl-12 pr-4 py-3 border-2 border-slate-200 rounded-2xl text-sm w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
                  />
                  <i className="fas fa-search absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-500 transition-colors"></i>
                  <div className="absolute right-3 top-2.5">
                    <kbd className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-300 rounded-lg">⌘K</kbd>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="relative p-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <i className="fas fa-bell text-lg"></i>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-3">
                <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                  <i className="fas fa-search text-lg"></i>
                </button>
                <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                  <i className="fas fa-bars text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center mb-6 group">
                  <Image
                    src="/Jonathan-Mwaniki-logo.png"
                    alt="Jonathan Mwaniki News Logo"
                    width={180}
                    height={55}
                    className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Delivering trusted journalism, breaking news, and insightful analysis from Kenya and East Africa to keep you informed and engaged.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-facebook-f', color: 'hover:bg-blue-600', href: '#' },
                    { icon: 'fab fa-twitter', color: 'hover:bg-sky-500', href: '#' },
                    { icon: 'fab fa-instagram', color: 'hover:bg-pink-600', href: '#' },
                    { icon: 'fab fa-youtube', color: 'hover:bg-red-600', href: '#' },
                  ].map((social, index) => (
                    <a key={index} href={social.href} className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}>
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                  <i className="fas fa-th-large mr-2 text-blue-400"></i>
                  News Categories
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Breaking News', icon: 'fas fa-bolt', href: '/breaking-news' },
                    { name: 'Politics', icon: 'fas fa-landmark', href: '/politics' },
                    { name: 'Business', icon: 'fas fa-chart-line', href: '/business' },
                    { name: 'Sports', icon: 'fas fa-futbol', href: '/sports' },
                    { name: 'Entertainment', icon: 'fas fa-film', href: '/entertainment' },
                    { name: 'Technology', icon: 'fas fa-microchip', href: '/technology' },
                  ].map((category, index) => (
                    <li key={index}>
                      <Link href={category.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                        <i className={`${category.icon} mr-3 text-blue-400 group-hover:text-white transition-colors`}></i>
                        {category.name}
                        <i className="fas fa-arrow-right ml-auto text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                  <i className="fas fa-link mr-2 text-green-400"></i>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact Us', href: '/contact' },
                    { name: 'Advertise', href: '/advertise' },
                    { name: 'Careers', href: '/careers' },
                    { name: 'Privacy Policy', href: '/privacy' },
                    { name: 'Terms of Service', href: '/terms' },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                        <i className="fas fa-chevron-right mr-3 text-xs text-green-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"></i>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-white flex items-center">
                  <i className="fas fa-envelope mr-2 text-purple-400"></i>
                  Stay Updated
                </h4>
                <p className="text-slate-400 mb-6">Get breaking news alerts and exclusive content delivered to your inbox.</p>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                      required
                    />
                    <i className="fas fa-envelope absolute right-3 top-3.5 text-slate-400"></i>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
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
                  <span className="flex items-center hover:text-white transition-colors">
                    <i className="fas fa-shield-alt mr-2 text-green-400"></i>
                    Verified Publisher
                  </span>
                  <span className="flex items-center hover:text-white transition-colors">
                    <i className="fas fa-award mr-2 text-yellow-400"></i>
                    Award-Winning Journalism
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Enhanced Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl md:hidden z-50 border-t border-slate-200/50">
          <div className="grid grid-cols-5 py-2">
            {[
              { href: '/', icon: 'fas fa-home', color: 'text-blue-600' },
              { href: '/breaking', icon: 'fas fa-bolt', color: 'text-red-600' },
              { href: '/categories', icon: 'fas fa-th-large', color: 'text-purple-600' },
              { href: '/bookmarks', icon: 'fas fa-bookmark', color: 'text-green-600' },
              { href: '/profile', icon: 'fas fa-user', color: 'text-orange-600' },
            ].map((item, index) => (
              <Link key={index} href={item.href} className="flex flex-col items-center justify-center py-2 text-slate-600 hover:bg-slate-50 transition-all duration-200 group">
                <div className={`w-8 h-8 flex items-center justify-center rounded-xl group-hover:${item.color} group-hover:bg-current group-hover:bg-opacity-10 transition-all duration-200`}>
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