import { Metadata } from "next";

const siteUrl = "https://josiassekhebesa.com";

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
    title: title ?? siteConfig.title,

    description:
      description ?? siteConfig.description,

    keywords: siteConfig.keywords,

    metadataBase: new URL(siteConfig.url),

    alternates: {
      canonical: url,
    },

    // icons: {
    //   icon: "/icon.png",
    //   apple: "/apple-touch-icon.png",
    // },

    openGraph: {
      title: title ?? siteConfig.title,

      description:
        description ?? siteConfig.description,

      url,

      siteName: siteConfig.name,

      type: "website",

      locale: "en_ZA",

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

      description:
        description ?? siteConfig.description,

      images: [siteConfig.ogImage],
    },

    authors: [
      {
        name: siteConfig.creator,
      },
    ],

    creator: siteConfig.creator,

    category: "Technology",
  };
}