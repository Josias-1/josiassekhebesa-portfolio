export default function ArchitecturePreview() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm">
            ARCHITECTURE
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Enterprise AI designed for production
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Every solution follows Microsoft's Cloud Adoption Framework,
            Azure Well-Architected principles and Responsible AI
            practices.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-16 text-center">
          <p className="text-2xl text-slate-500">
            Azure Architecture Diagram
          </p>

          <p className="mt-4 text-sky-400">
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}