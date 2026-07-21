import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});


export const metadata = {
  title: "Josias Sekhebesa | Enterprise AI Engineer",
  description:
    "Enterprise AI Engineer specialising in Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), and intelligent automation.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Josias Sekhebesa | Enterprise AI Engineer",
    description:
      "Building intelligent AI systems that deliver measurable business outcomes.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className={`${geist.className} bg-[#060B14] text-white`}>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}