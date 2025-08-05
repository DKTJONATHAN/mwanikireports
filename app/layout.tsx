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
    default: "Jonathan Mwaniki News - Latest News & Gossip in Kenya",
    template: "%s | Jonathan Mwaniki News",
  },
  description: "Stay updated with breaking news, sports, entertainment, tech, opinions, and gossip from Kenya and beyond at Jonathan Mwaniki News.",
  keywords: [
    "Kenya news",
    "breaking news",
    "gossip",
    "sports",
    "entertainment",
    "tech",
    "opinions",
    "Jonathan Mwaniki",
    "Nairobi news",
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
    title: "Jonathan Mwaniki News - Latest News & Gossip",
    description: "Your source for breaking news, sports, entertainment, tech, opinions, and gossip in Kenya.",
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
    description: "Get the latest news, gossip, sports, tech, and opinions from Kenya.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* Breaking News Ticker */}
        <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
          <div className="container mx-auto flex items-center">
            <span className="mr-3 font-bold">BREAKING:</span>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block">
                <span className="mx-4">• Kenya ranked first in global human rights violations watchlist</span>
                <span className="mx-4">• NACADA raises legal drinking age to 21</span>
                <span className="mx-4">• CHAN 2024 kicks off this weekend in Nairobi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Jonathan-Mwaniki-logo.png"
                    alt="Jonathan Mwaniki News Logo"
                    width={160}
                    height={50}
                    className="h-10 w-auto"
                  />
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
            
            {/* Navigation */}
            <nav className="mt-4">
              <ul className="flex space-x-6 text-sm font-medium overflow-x-auto whitespace-nowrap">
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
                <li>
                  <Link href="/category/gossip" className="text-gray-700 hover:text-red-600 pb-2">Gossip</Link>
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
                  <Image
                    src="/Jonathan-Mwaniki-logo.png"
                    alt="Jonathan Mwaniki News Logo"
                    width={160}
                    height={50}
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="text-gray-400 mb-4">Your trusted source for the latest news and updates from Kenya and beyond.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Categories</h4>
                <ul className="space-y-2">
                  <li><Link href="/category/news" className="text-gray-400 hover:text-white">News</Link></li>
                  <li><Link href="/category/breaking-news" className="text-gray-400 hover:text-white">Breaking News</Link></li>
                  <li><Link href="/category/sports" className="text-gray-400 hover:text-white">Sports</Link></li>
                  <li><Link href="/category/entertainment" className="text-gray-400 hover:text-white">Entertainment</Link></li>
                  <li><Link href="/category/tech" className="text-gray-400 hover:text-white">Technology</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/advertise" className="text-gray-400 hover:text-white">Advertise</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4">Subscribe to our newsletter for daily news updates.</p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-gray-700 text-white rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Jonathan Mwaniki News. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden flex justify-around py-3 z-50 border-t border-gray-200">
          <Link href="/" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-home text-lg"></i>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/categories" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-th-large text-lg"></i>
            <span className="text-xs mt-1">Categories</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-search text-lg"></i>
            <span className="text-xs mt-1">Search</span>
          </Link>
          <Link href="/account" className="flex flex-col items-center text-gray-700 hover:text-red-600">
            <i className="fas fa-user text-lg"></i>
            <span className="text-xs mt-1">Account</span>
          </Link>
        </div>
      </body>
    </html>
  );
}