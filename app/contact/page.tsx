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
        description="Whether you're hiring, exploring Enterprise AI or looking for technical leadership, I'd be happy to hear from you."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left Column */}

          <div>

            <h2 className="mb-8 text-3xl font-bold text-white">
              Let's Connect
            </h2>

            <div className="space-y-8">

              <InfoCard
                title="Email"
                value={
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    {contact.email}
                  </a>
                }
                description="The best way to reach me for opportunities and enquiries."
              />

              <InfoCard
                title="LinkedIn"
                value={
                  <a
                    href={contact.socials[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    Connect Professionally
                  </a>
                }
                description="Follow my work in Enterprise AI, Azure AI and Intelligent Automation."
              />

              <InfoCard
                title="Book a Meeting"
                value={
                  <a
                    href="https://calendly.com/sekhebesa/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    Schedule a 30-minute discussion
                  </a>
                }
                description="Let's discuss oppotunities: Enterprise AI, Azure AI, consulting or technical leadership."
              />

            </div>

          </div>

          {/* Right Column */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Send a Message
            </h2>

            <p className="mt-4 mb-8 max-w-xl text-slate-400 leading-7">
              Tell me about your project, opportunity, or idea. I'll get back
              to you as soon as possible.
            </p>

            <ContactForm />

            <p className="mt-6 text-sm text-slate-500">
              Typical response time: <span className="text-slate-300">Within one business day.</span>
            </p>

          </div>

        </div>

      </section>
    </>
  );
}