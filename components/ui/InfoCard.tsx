import { ReactNode } from "react";

interface Props {
  title: string;
  value: ReactNode;
  description?: string;
}

export default function InfoCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-xl text-sky-400">
        {value}
      </p>

      {description && (
        <p className="mt-4 text-slate-400">
          {description}
        </p>
      )}

    </div>
  );
}