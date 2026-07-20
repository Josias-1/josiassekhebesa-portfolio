interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
          {description}
        </p>

      </div>
    </section>
  );
}