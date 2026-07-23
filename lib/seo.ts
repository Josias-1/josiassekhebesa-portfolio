import { Metadata } from "next";

const siteUrl = "https://www.josiassekhebesa.com";

export const siteConfig = {
  name: "Josias Sekhebesa",

  title: "Enterprise AI Engineer | Josias Sekhebesa",

  description:
    "Enterprise AI Engineer specialising in Azure AI, Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), Intelligent Automation and Azure Cloud Architecture.",

  url: siteUrl,

  ogImage: `${siteUrl}/og-image.png`,

  creator: "Josias Sekhebesa",

  keywords: [
    "Enterprise AI",
    "Azure AI",
    "Azure OpenAI",
    "Generative AI",
    "Agentic AI",
    "Retrieval Augmented Generation",
    "RAG",
    "Azure AI Engineer",
    "Machine Learning",
    "LLMOps",
    "Data Science",
    "Azure",
    "Microsoft AI",
    "Intelligent Automation",
  ],
};

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
}: MetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),

    title: title ?? siteConfig.title,

    description: description ?? siteConfig.description,

    applicationName: siteConfig.name,

    keywords: siteConfig.keywords,

    authors: [
      {
        name: siteConfig.creator,
      },
    ],

    creator: siteConfig.creator,

    publisher: siteConfig.creator,

    category: "Technology",

    referrer: "origin-when-cross-origin",

    verification: {
      google: "PSY7MCvtq_mH5aVjMgPAnr8sql_jFb-wz-xvyecD_GE",
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: title ?? siteConfig.title,

      description: description ?? siteConfig.description,

      url,

      siteName: siteConfig.name,

      locale: "en_ZA",

      type: "website",

      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Josias Sekhebesa",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: title ?? siteConfig.title,

      description: description ?? siteConfig.description,

      creator: "@josiassekhe", // Replace if you have an X/Twitter handle

      images: [siteConfig.ogImage],
    },
  };
}