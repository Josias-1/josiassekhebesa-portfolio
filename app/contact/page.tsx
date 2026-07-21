import { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import InfoCard from "@/components/ui/InfoCard";
import ContactForm from "@/components/forms/ContactForm";
import { contact } from "@/data/contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact | Josias Sekhebesa",

  description:
    "Get in touch with Josias Sekhebesa for Enterprise AI consulting, Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), intelligent automation, technical leadership, speaking engagements, and collaboration opportunities.",

  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Build Intelligent Solutions Together"
        description="Interested in Enterprise AI, Generative AI, AI architecture, or technology collaboration? Let's discuss how AI can create measurable business impact."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Contact Information
            </h2>

            <div className="space-y-8">

              <InfoCard
                title="Email"
                value={
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    {contact.email}
                  </a>
                }
                description="The best way to start a conversation."
              />

              <InfoCard
                title="Location"
                value={contact.location}
                description="Available for remote, hybrid, and global collaboration."
              />

              <InfoCard
                title="AI & Technology Collaboration"
                value="Enterprise AI Solutions"
                description="Architecture design, Generative AI, RAG systems, Agentic AI, and intelligent automation."
              />

              <InfoCard
                title="Professional Network"
                value={
                  <a
                    href={contact.socials[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 underline"
                  >
                    LinkedIn
                  </a>
                }
                description="Connect professionally and follow my AI engineering journey."
              />

            </div>
          </div>

          {/* Right Side */}

          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Send a Message
            </h2>

            <ContactForm />
          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-slate-900/40 p-10 text-center">

          <h2 className="text-3xl font-bold text-white">
            Building the future with AI?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            Whether you need an AI strategy, enterprise architecture guidance,
            or a technical partner to build intelligent systems, I'd be happy
            to connect.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            Start a Conversation
          </a>

        </div>
      </section>
    </>
  );
}