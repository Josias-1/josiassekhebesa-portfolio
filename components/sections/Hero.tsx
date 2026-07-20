import { ArrowRight, Download } from "lucide-react";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 lg:pt-48">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            {profile.title}
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Designing Enterprise AI
            <br />
            <span className="text-sky-400">
              that transforms business.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            {profile.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="#solutions"
              className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/Josias-Sekhebesa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center rounded-xl border border-slate-700 px-6 py-4 font-semibold text-slate-300 transition hover:border-sky-500 hover:text-white"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}