import { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ComingSoon from "@/components/ui/ComingSoon";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Enterprise AI Solutions | Josias Sekhebesa",

  description:
    "Discover Enterprise AI solutions including Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), intelligent automation, and cloud-native AI architectures designed to solve real business challenges.",

  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Enterprise AI Solutions"
        description="A collection of enterprise AI platforms, intelligent automation solutions, Retrieval-Augmented Generation (RAG) systems, and Azure AI architectures designed to solve real business challenges."
      />

      <ComingSoon />
    </>
  );
}