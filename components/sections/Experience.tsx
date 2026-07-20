export default function Experience() {
  const jobs = [
    {
      company: "NTT DATA",
      role: "Data Scientist (Enterprise AI Engineering)",
      period: "Apr 2024 – Present",
      summary:
        "Designing and deploying enterprise AI solutions using Azure OpenAI, Agentic AI, Retrieval-Augmented Generation (RAG), and intelligent automation for enterprise clients.",
      highlights: [
        "AI Bid Management Platform",
        "Finance AI Assistant",
        "ServiceNow Automation",
        "SLA Risk Analytics",
      ],
    },
    {
      company: "Campze",
      role: "CTO & Co-Founder",
      period: "Mar 2024 – Feb 2025",
      summary:
        "Defined the technology vision and Azure cloud architecture for an EdTech startup, delivering a scalable, secure platform from concept to production.",
      highlights: [
        "Azure Cloud",
        "Product Strategy",
        "Platform Architecture",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Scientist",
      period: "Oct 2023 – Mar 2024",
      summary:
        "Built enterprise AI solutions including Azure OpenAI Bring Your Own Data (BYOD) and intelligent event correlation for IT operations.",
      highlights: [
        "Azure OpenAI",
        "Enterprise AI",
        "Event Correlation",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Specialist",
      period: "Nov 2021 – Oct 2023",
      summary:
        "Improved enterprise data quality, governance, automation and operational reporting across more than 41,000 organisations.",
      highlights: [
        "Python",
        "SQL",
        "Data Governance",
        "ITSM",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Science Intern",
      period: "Jul 2020 – Jun 2021",
      summary:
        "Applied Machine Learning and Natural Language Processing (NLP) to identify automation opportunities and support data-driven decision making.",
      highlights: [
        "Machine Learning",
        "NLP",
        "Power BI",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          EXPERIENCE
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Building enterprise AI, one challenge at a time.
        </h2>

        <p className="mt-6 text-xl leading-9 text-slate-400">
          My journey spans data science, enterprise data engineering,
          cloud architecture, and modern AI systems. Every role has
          strengthened my ability to translate complex business problems
          into scalable technology solutions.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {jobs.map((job) => (
          <div
            key={job.company + job.role}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/70"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {job.role}
                </h3>

                <p className="mt-2 text-lg text-sky-400">
                  {job.company}
                </p>
              </div>

              <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300">
                {job.period}
              </span>
            </div>

            <p className="mt-8 max-w-4xl leading-8 text-slate-400">
              {job.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {job.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}