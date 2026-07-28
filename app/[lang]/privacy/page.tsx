import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  copies,
  isLanguage,
  LegalPage,
  supportedLanguages,
} from "../../legal-content";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const copy = copies[lang];
  return {
    title: copy.privacyTitle,
    description: copy.privacySummary,
    alternates: {
      canonical: `https://yizesun.github.io/myBalcony-site/${lang}/privacy/`,
      languages: {
        de: "https://yizesun.github.io/myBalcony-site/de/privacy/",
        en: "https://yizesun.github.io/myBalcony-site/en/privacy/",
        "zh-Hans":
          "https://yizesun.github.io/myBalcony-site/zh/privacy/",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <LegalPage language={lang} section="privacy" />;
}
