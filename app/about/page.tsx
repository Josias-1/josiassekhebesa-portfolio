import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm font-semibold">
            ABOUT
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Building AI that delivers measurable business outcomes.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">

            <p>
              I'm Josias Sekhebesa,
              an Enterprise AI Engineer specialising in Generative AI,
              Agentic AI, Retrieval-Augmented Generation (RAG),
              Intelligent Automation and Azure AI.
            </p>

            <p>
              My background combines science, engineering,
              business administration and enterprise technology,
              allowing me to bridge the gap between technical innovation
              and executive decision-making.
            </p>

            <p>
              Over the past six years I've designed AI systems for
              global enterprises, helping organisations automate complex
              workflows, improve service delivery, accelerate proposal
              generation and unlock business intelligence using modern AI.
            </p>

            <p>
              I enjoy solving difficult business problems using AI; not by
              chasing hype, but by building secure, scalable systems that
              create measurable value.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}