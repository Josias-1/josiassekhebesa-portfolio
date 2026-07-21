export const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: "Josias Sekhebesa",

  url: "https://josiassekhebesa.com",

  mainEntityOfPage: {
    "@type": "WebSite",
    "@id": "https://josiassekhebesa.com",
  },

  image: "https://josiassekhebesa.com/profile.jpg",

  jobTitle: "Enterprise AI Engineer",

  worksFor: {
    "@type": "Organization",
    name: "NTT DATA",
  },

  description:
    "Enterprise AI Engineer specialising in Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), Intelligent Automation and Azure Cloud Architecture.",

  email: "mailto:josias@josiassekhebesa.com",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },

  sameAs: [
    "https://www.linkedin.com/in/josias-sekhebesa/",
    "https://josiassekhebesa.com",
  ],

  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of the Witwatersrand",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Wits Business School",
    },
  ],

  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "Microsoft Certified: Agentic AI Business Solutions Architect Expert (AB-100)",
    },
  ],

  knowsAbout: [
    "Enterprise AI",
    "Azure AI",
    "Azure OpenAI",
    "Generative AI",
    "Agentic AI",
    "Retrieval-Augmented Generation",
    "RAG",
    "Machine Learning",
    "Data Science",
    "LLMOps",
    "Azure",
    "Python",
    "SQL",
    "Power BI",
    "Azure AI Search",
    "LangChain",
    "Prompt Flow",
    "Microsoft Azure",
  ],
};