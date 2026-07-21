export default function ArchitecturePreview() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-6 py-28"
    >

      <div className="grid items-center gap-16 lg:grid-cols-2">


        {/* Content */}
        <div>

          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm">
            ARCHITECTURE
          </p>


          <h2 className="mt-3 text-5xl font-bold leading-tight text-white">
            Enterprise AI designed for production
          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-400">
            Designing secure, scalable AI solutions using Microsoft Azure
            architecture patterns, cloud best practices, and Responsible AI
            principles.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Azure OpenAI",
              "Azure AI Search",
              "RAG",
              "Agentic AI",
              "Azure ML",
              "MLOps",
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



        {/* Architecture Preview */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-12">

          <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">

            <p className="text-xl font-semibold text-white">
              AI Solution Architectures
            </p>


            <p className="mt-4 text-slate-400">
              Reference designs covering:
            </p>


            <ul className="mt-6 space-y-3 text-sm text-slate-400">

              <li>
                ✓ Enterprise RAG Knowledge Assistant
              </li>

              <li>
                ✓ Agentic AI Business Automation
              </li>

              <li>
                ✓ MLOps & AI Operations Platforms
              </li>

              <li>
                ✓ Data Intelligence Solutions
              </li>

            </ul>


            <p className="mt-8 text-sky-400 text-sm">
              Architecture library expanding soon
            </p>

          </div>

        </div>


      </div>

    </section>
  );
}