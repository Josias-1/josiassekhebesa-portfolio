import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {profile.title}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl leading-tight">
            Designing Enterprise AI
that transforms business.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            {profile.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white hover:bg-sky-600 transition"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/Josias-Sekhebesa-CV.pdf"
              className="inline-flex items-center rounded-xl border border-slate-700 px-6 py-4 font-semibold text-slate-300 hover:border-sky-500 hover:text-white transition"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}