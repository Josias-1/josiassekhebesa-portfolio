import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function PlaybookCard({
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40">

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-medium text-sky-400 transition group-hover:gap-4">
        Contact me for a copy

        {/* <ArrowRight size={18} /> */}
      </div>

    </div>
  );
}