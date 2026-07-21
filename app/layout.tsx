import { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { createMetadata } from "@/lib/seo";

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
      <body
        className={`${geist.className} bg-[#060B14] text-white`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}