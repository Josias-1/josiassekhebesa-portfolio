import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

import Container from "@/components/layout/Container";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden overflow-y-hidden pt-20 pb-20 sm:pt-24 lg:pt-36 lg:pb-28">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[150px]" />

      </div>

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Mobile: Image first | Desktop: Text first */}

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />

              <div
                className="
                  relative
                  h-72
                  w-72
                  overflow-hidden
                  rounded-full
                  border
                  border-slate-700
                  shadow-2xl

                  sm:h-80
                  sm:w-80

                  lg:h-[420px]
                  lg:w-[420px]
                "
              >
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

          {/* Content */}

          <div className="order-2 relative z-10 lg:order-1">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-sky-400 sm:text-sm">
              {profile.title}
            </p>

            <h1
              className="
                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Designing Enterprise AI

              <br />

              <span className="text-sky-400">
                that transforms business.
              </span>

            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-300

                sm:text-xl
                sm:leading-9
              "
            >
              {profile.description}
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/solutions"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-sky-600

                  sm:w-auto
                "
              >
                Explore Solutions
              </Link>

              <a
                href="/JosiasSekhebesa_Summarized_Resume_072026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-700
                  px-6
                  py-4
                  font-semibold
                  text-slate-300
                  transition
                  hover:border-sky-500
                  hover:text-white

                  sm:w-auto
                "
              >
                Download CV

                <Download className="ml-2 h-5 w-5" />
              </a>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}