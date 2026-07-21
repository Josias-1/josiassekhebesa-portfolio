import { Metadata } from "next";

import Experience from "@/components/sections/Experience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience | Josias Sekhebesa",

  description:
    "Explore the professional experience of Josias Sekhebesa, Enterprise AI Engineer specialising in Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), Intelligent Automation, Data Science, and Azure Cloud solutions.",

  path: "/experience",
});

export default function ExperiencePage() {
  return <Experience />;
}