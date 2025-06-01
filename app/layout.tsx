import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Using a local font
const Clash_display = localFont({
  src: [
    {
      path: '../assets/font/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/font/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Apex CRM Systems",
  description: "End-to-end CRM setup so your sales team can focus on closing, not clicking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Clash_display.className} ${inter.variable} antialiased scroll-smooth`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
