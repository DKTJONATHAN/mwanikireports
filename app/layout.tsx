import type { Metadata } from "next";
import ClientLayout from "./client-layout"; // Add this import

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
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}