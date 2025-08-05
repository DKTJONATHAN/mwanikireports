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
  title: "Jonathan Mwaniki News - Latest News & Gossip",
  description: "Your source for breaking news, sports, entertainment, tech, and opinions in Kenya and beyond.",
  openGraph: {
    title: "Jonathan Mwaniki News",
    description: "Stay updated with the latest news, gossip, sports, tech, and opinions at Jonathan Mwaniki News.",
    url: "https://jonathanmwaniki.co.ke",
    type: "website",
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