import Image from "next/image";
import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid md:grid-cols-3 gap-12 items-start">


          {/* Profile Image */}
          <div className="flex justify-center md:justify-start md:pt-28">

            <div className="relative w-64 h-77 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">

              <Image
                src="/images/josias-profile.jpg"
                alt="Josias Sekhebesa - Enterprise AI Engineer"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>




          {/* About Content */}
          <div className="md:col-span-2">


            <p className="text-sky-400 uppercase tracking-[0.3em] text-sm font-semibold">
              ABOUT ME
            </p>



            <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-white">

              Building{" "}

              <span className="text-sky-400">
                intelligent AI systems
              </span>{" "}

              that deliver measurable business outcomes.

            </h1>



            <p className="mt-6 text-lg leading-8 text-slate-300">

              I'm Josias Sekhebesa, an Enterprise AI Engineer specialising in
              Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG),
              Intelligent Automation and Azure AI solutions.

            </p>



            <p className="mt-4 text-lg leading-8 text-slate-300">

              I combine my academic background in Engineering, Data Science, Business Administration,
              and Enterprise Technology to bridge the gap between AI innovation
              and real-world business impact.

            </p>



            <p className="mt-4 text-lg leading-8 text-slate-300">

              My focus is designing secure, scalable AI platforms that help
              organisations automate workflows, unlock insights from enterprise
              data and make better decisions through modern AI.

            </p>






            {/* Microsoft Certifications */}
            <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-900/40 p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Microsoft Certified
              </p>

              <p className="mt-4 max-w-2xl text-slate-400 leading-7">
                Microsoft-certified across Enterprise AI, Azure AI, Data Science and
                Cloud technologies.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Agentic AI Business Solutions Architect Expert (AB-100)",
                  "Azure AI Engineer Associate (AI-102)",
                  "Azure Data Scientist Associate (DP-100)",
                  "Azure Fundamentals (AZ-900)",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-lg text-slate-200">
                      {cert}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="/"
                className="mt-8 inline-flex items-center font-semibold text-sky-400 transition hover:text-sky-300"
              >
                View Certifications on Homepage
              </a>

            </div>





            {/* Technical Expertise */}
            <div className="mt-12">


              <h2 className="text-2xl font-bold text-white">
                Core Technical Expertise
              </h2>



              <div className="mt-6 grid sm:grid-cols-2 gap-4">



                <ExpertiseCard
                  title="Cloud & AI Platforms"
                  description="Microsoft Azure, Azure AI Studio, Azure Machine Learning, Prompt Flow, Azure OpenAI, Cognitive Services."
                />


                <ExpertiseCard
                  title="Generative AI & NLP"
                  description="Prompt engineering, LLM evaluation, AI guardrails, embeddings, vector search, RAG architectures, LangChain."
                />


                <ExpertiseCard
                  title="Data Science & Machine Learning"
                  description="Python, pandas, NumPy, scikit-learn, Jupyter, MLflow, Azure ML experiments, feature engineering, classification and regression models."
                />


                <ExpertiseCard
                  title="Application Development & APIs"
                  description="Azure Functions, Logic Apps, App Service, API Management, REST APIs, connectors, and enterprise integrations."
                />


                <ExpertiseCard
                  title="Data Platforms & Storage"
                  description="Azure Blob Storage, Azure SQL Database, Cosmos DB, Event Hubs, Data Factory, Synapse Analytics."
                />


                <ExpertiseCard
                  title="Microsoft Business Platforms"
                  description="Microsoft 365, Teams, Outlook, SharePoint, Power Automate, Power Apps, Power BI, Copilot Studio."
                />


                <ExpertiseCard
                  title="Enterprise Systems"
                  description="ServiceNow ITSM APIs, reporting platforms, SAP integrations, service portals, and enterprise workflows."
                />


                <ExpertiseCard
                  title="Security, Governance & DevOps"
                  description="Entra ID, Managed Identities, Key Vault, RBAC, Private Endpoints, Git, GitHub, Azure DevOps, GitHub Actions, MLOps and LLMOps."
                />


              </div>


            </div>






            {/* Core Technologies */}
            <div className="mt-10 flex flex-wrap gap-3">


              {[
                "Azure OpenAI",
                "Azure AI Search",
                "RAG",
                "Agentic AI",
                "LangChain",
                "Python",
                "Azure ML",
                "MLflow",
                "Power BI",
                "ServiceNow",
                "SAP",
                "MLOps",
                "LLMOps",
                "GitHub Actions",
              ].map((skill) => (

                <span
                  key={skill}
                  className="rounded-full bg-sky-400/10 border border-sky-400/20 px-4 py-2 text-sm text-sky-300"
                >
                  {skill}
                </span>

              ))}


            </div>


          </div>


        </div>


      </Container>
    </section>
  );
}



function ExpertiseCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {

  return (

    <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-5">

      <h3 className="font-semibold text-sky-300">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>


    </div>

  );
}