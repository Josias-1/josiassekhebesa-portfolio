import PageHero from "@/components/ui/PageHero";
import InfoCard from "@/components/ui/InfoCard";
import CTA from "@/components/ui/CTA";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's Build Enterprise AI Together"
        description="Whether you're exploring AI, looking for technical leadership, or interested in collaboration, I'd love to hear from you."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2">
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
  description="The best way to reach me."
/>

        <InfoCard
          title="Location"
          value={contact.location}
          description="Available for remote and hybrid opportunities."
        />

        <InfoCard
          title="Availability"
          value="Open to Opportunities"
          description={contact.availability}
        />

<InfoCard
  title="LinkedIn"
  value={
    <a
      href={contact.socials[0].url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-400 hover:text-sky-300 underline"
    >
      linkedin.com/in/josias-sekhebesa
    </a>
  }
  description="Let's connect professionally."
/>
      </section>

    </>
  );
}