import { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PlaybookCard from "@/components/ui/PlaybookCard";
import { playbook } from "@/data/playbook";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Enterprise AI Playbook | Josias Sekhebesa",

  description:
    "Explore practical guides, architecture patterns, engineering principles, Azure AI best practices, Retrieval-Augmented Generation (RAG), Agentic AI, and production-ready Enterprise AI implementation playbooks.",

  path: "/playbook",
});

export default function PlaybookPage() {
  return (
    <>
      <PageHero
        eyebrow="PLAYBOOK"
        title="Enterprise AI Playbook"
        description="Architecture patterns, engineering principles and practical guidance for building production-ready AI systems."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="GUIDES"
          title="Engineering Knowledge"
          description="A growing collection of practical articles and implementation guides."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {playbook.map((item) => (
            <PlaybookCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}