import { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { createMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/structured-data";

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#060B14] text-white`}>
        {/* Structured Data (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <Navbar />

        {children}

        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}