import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://josiassekhebesa.com/sitemap.xml",

    host: "https://josiassekhebesa.com",
  };
}