const solutions = [
  {
    title: "Enterprise AI Assistants",
    description:
      "Secure Retrieval-Augmented Generation (RAG) assistants powered by Azure OpenAI.",
  },
  {
    title: "Agentic AI",
    description:
      "Multi-agent enterprise workflows that automate complex business processes.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Machine Learning solutions for SLA prediction, forecasting and intelligent reporting.",
  },
  {
    title: "AI Architecture",
    description:
      "Production-ready Azure AI architectures built for scale, governance and security.",
  },
];

export default function FeaturedSolutions() {
  return (
    <section
      id="solutions"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-12">
        <p className="text-sky-400 uppercase tracking-[0.3em] text-sm">
          SOLUTIONS
        </p>

        <h2 className="mt-3 text-5xl font-bold text-white">
          What I build
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 transition hover:border-sky-500"
          >
            <h3 className="text-2xl font-semibold text-white">
              {solution.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {solution.description}
            </p>

            <div className="mt-8 text-sky-400">
              Completed
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}