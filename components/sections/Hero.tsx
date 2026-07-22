import Image from "next/image";
import { Download } from "lucide-react";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />

      </div>


      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Hero Content */}
          <div className="relative z-10">


            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              {profile.title}
            </p>


            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">

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
              </a>


              <a
                href="/JosiasSekhebesa_Summarized_Resume_072026.pdf"
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



          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end lg:-translate-y-19">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />


              <div className="relative h-100 w-100 overflow-hidden rounded-full border border-slate-700 shadow-2xl">

                <Image
                  src="/images/josias-profile.jpg"
                  alt="Josias Sekhebesa - Enterprise AI Engineer"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

            </div>

          </div>


        </div>


      </Container>

    </section>
  );
}