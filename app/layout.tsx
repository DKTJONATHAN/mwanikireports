import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description:
    "Stay updated with breaking news, sports, entertainment, tech, opinions, and gossip from Kenya and beyond at Jonathan Mwaniki News.",
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
    description:
      "Your source for breaking news, sports, entertainment, tech, opinions, and gossip in Kenya.",
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
    description:
      "Get the latest news, gossip, sports, tech, and opinions from Kenya.",
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
      <head>
        <script
          src="https://kit.fontawesome.com/4a5d7e6f8b.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}