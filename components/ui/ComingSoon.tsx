export default function ComingSoon() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/40 p-12 text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Knowledge Hub
      </p>

      <h3 className="mt-4 text-3xl font-bold text-white">
        Enterprise AI Engineering Insights
      </h3>

      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
        A growing collection of AI architecture patterns, enterprise case
        studies, RAG implementations, MLOps practices, and technical
        playbooks focused on building secure, scalable AI solutions.
      </p>


      <div className="mt-8 flex flex-wrap justify-center gap-3">

        {[
          "AI Architecture",
          "RAG Systems",
          "Agentic AI",
          "Azure AI",
          "MLOps",
          "LLMOps",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-300"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}