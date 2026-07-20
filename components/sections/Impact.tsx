"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import MetricCard from "@/components/ui/MetricCard";

const metrics = [
  {
    value: 6,
    suffix: "+",
    label: "Years Experience",
    description:
      "Designing enterprise AI, data science and automation solutions.",
  },
  {
    value: 80,
    suffix: "%",
    label: "Faster Proposal Delivery",
    description:
      "Reduced enterprise bid preparation effort through multi-agent AI.",
  },
  {
    value: 41000,
    suffix: "+",
    label: "Enterprise Records",
    description:
      "Governed and improved quality across large-scale operational datasets.",
  },
  {
    value: 30,
    suffix: "%",
    label: "Operational Efficiency",
    description:
      "Reduced engineering effort through intelligent event correlation.",
  },
  {
    value: 20,
    suffix: "%",
    label: "AI Adoption",
    description:
      "Increased enterprise self-service using Azure OpenAI solutions.",
  },
];
export default function Impact() {
  return (
    <section className="py-32 bg-black">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-sky-400 font-semibold uppercase tracking-[0.25em]">
            Enterprise Impact at Scale
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Delivering measurable business outcomes.
          </h2>

          <p className="mt-6 max-w-3xl text-xl text-slate-400">
            Enterprise AI should create measurable value. These outcomes
            represent real-world improvements delivered across AI,
            automation, data engineering, and enterprise platforms.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              {...metric}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}