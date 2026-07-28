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
    title: copy.supportTitle,
    description: copy.supportSummary,
    alternates: {
      canonical: `https://yizesun.github.io/myBalcony-site/${lang}/support/`,
      languages: {
        de: "https://yizesun.github.io/myBalcony-site/de/support/",
        en: "https://yizesun.github.io/myBalcony-site/en/support/",
        "zh-Hans":
          "https://yizesun.github.io/myBalcony-site/zh/support/",
      },
    },
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <LegalPage language={lang} section="support" />;
}
