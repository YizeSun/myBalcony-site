import type { MetadataRoute } from "next";
import { supportedLanguages } from "./legal-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yizesun.github.io/myBalcony-site";
  const updated = new Date("2026-07-28T00:00:00+02:00");
  return [
    {
      url: `${base}/`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...supportedLanguages.flatMap((language) =>
      (["privacy", "support"] as const).map((section) => ({
        url: `${base}/${language}/${section}/`,
        lastModified: updated,
        changeFrequency: "monthly" as const,
        priority: section === "privacy" ? 1 : 0.9,
      })),
    ),
  ];
}
