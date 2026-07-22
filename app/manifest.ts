import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Josias Sekhebesa",

    short_name: "JS",

    description:
      "Enterprise AI Engineer specialising in Azure AI, Generative AI and Intelligent Automation.",

    start_url: "/",

    display: "standalone",

    background_color: "#060B14",

    theme_color: "#060B14",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}