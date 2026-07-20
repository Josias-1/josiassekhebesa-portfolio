interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-14 max-w-3xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}

    </div>
  );
}