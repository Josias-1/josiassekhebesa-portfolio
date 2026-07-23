export default function Experience() {
  const jobs = [
    {
      company: "NTT DATA",
      role: "Enterprise AI Engineer / Data Scientist",
      period: "Apr 2024 – Present",
      summary:
        "Architecting and delivering enterprise AI solutions using Azure OpenAI, Agentic AI, Retrieval-Augmented Generation (RAG), and intelligent automation patterns. Building secure AI platforms that transform enterprise knowledge, workflows, and decision-making.",
      highlights: [
        "Azure OpenAI Enterprise Solutions",
        "Enterprise RAG Platforms",
        "AI Bid Management",
        "Finance AI Assistant",
        "ServiceNow Automation",
        "SLA Risk Intelligence",
      ],
    },
    {
      company: "Campze",
      role: "CTO & Co-Founder",
      period: "Mar 2024 – Feb 2025",
      summary:
        "Responsible for the technology vision and cloud architecture for an EdTech platform, leading the design and delivery of a scalable Azure-based solution from concept to production.",
      highlights: [
        "Azure Cloud Architecture",
        "Product Strategy",
        "Full-Stack Platform Development",
        "Data & Analytics Platform",
        "Technology Leadership",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Scientist",
      period: "Oct 2023 – Mar 2024",
      summary:
        "Designed and implemented enterprise AI solutions including Azure OpenAI Bring Your Own Data (BYOD), intelligent event correlation, and AI-driven automation capabilities for IT operations.",
      highlights: [
        "Azure OpenAI BYOD",
        "Generative AI Solutions",
        "Event Correlation",
        "IT Operations Intelligence",
        "Machine Learning",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Specialist",
      period: "Nov 2021 – Oct 2023",
      summary:
        "Improved enterprise data quality, governance, automation, and reporting capabilities across large-scale IT environments, enabling better operational visibility and decision-making.",
      highlights: [
        "Python & SQL",
        "Data Governance",
        "ITSM Analytics",
        "Power BI Reporting",
        "Data Automation",
      ],
    },
    {
      company: "Dimension Data",
      role: "Data Science Intern",
      period: "Jul 2020 – Jun 2021",
      summary:
        "Applied machine learning, natural language processing, and analytics techniques to identify automation opportunities and support data-driven business decisions.",
      highlights: [
        "Machine Learning",
        "Natural Language Processing",
        "Predictive Analytics",
        "Power BI",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >

      {/* Section Header */}
      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          EXPERIENCE
        </p>


        <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Transforming enterprise challenges into intelligent AI solutions.
        </h2>


        <p className="mt-6 text-xl leading-9 text-slate-400">
          My journey has evolved from data analytics and engineering into
          enterprise AI architecture, combining cloud platforms, machine
          learning, and Generative AI to solve complex organisational
          challenges.
        </p>

      </div>



      {/* Experience Cards */}
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


                <p className="mt-2 text-lg font-medium text-sky-400">
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