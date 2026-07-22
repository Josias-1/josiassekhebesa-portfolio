import SectionHeader from "@/components/ui/SectionHeader";
import CertificationCard from "@/components/ui/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <SectionHeader
        eyebrow="MICROSOFT CERTIFIED"
        title="Professional Certifications"
        description="Microsoft-certified across Enterprise AI architecture, Azure AI engineering, Data Science and Cloud technologies, with expertise spanning Agentic AI, Generative AI, Retrieval-Augmented Generation (RAG), MLOps and production AI solutions."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {certifications.map((cert) => (
          <CertificationCard
            key={cert.exam}
            {...cert}
          />
        ))}

      </div>

    </section>
  );
}