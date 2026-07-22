import Image from "next/image";
import { CheckCircle2, ExternalLink } from "lucide-react";

interface Props {
  title: string;
  exam: string;
  level: string;
  year: string;
  badge: string;
  verify: string;
  skills: string[];
}

export default function CertificationCard({
  title,
  exam,
  level,
  year,
  badge,
  verify,
  skills,
}: Props) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]">

      {/* Badge */}

      <div className="flex h-[120px] items-center justify-center">
        <Image
          src={badge}
          alt={title}
          width={120}
          height={120}
          className="transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* Title */}

      <div className="mt-8 flex h-[180px] items-start">

        <h3 className="text-2xl font-bold leading-tight text-white">
          {title}
        </h3>

      </div>

      {/* Metadata */}

      <div className="h-[70px]">

        <div className="flex flex-wrap items-center gap-2">

          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-400">
            {exam}
          </span>

          <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-slate-400">
            {level}
          </span>

        </div>

        <p className="mt-3 text-sm text-slate-500">
          Earned {year}
        </p>

      </div>

      {/* Skills */}

      <div className="mt-6 flex-1">

        <div className="space-y-5">

          {skills.map((skill) => (

            <div
              key={skill}
              className="flex items-center gap-3 text-slate-300"
            >

              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />

              <span>{skill}</span>

            </div>

          ))}

        </div>

      </div>

      {/* CTA */}

      <a
        href={verify}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 px-5 py-3 font-semibold text-sky-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
      >
        Verify Credential

        <ExternalLink className="ml-2 h-4 w-4" />

      </a>

    </div>
  );
}