import Link from "next/link";

const languages = [
  {
    code: "de",
    label: "Deutsch",
    privacy: "Datenschutz",
    support: "Support",
    intro:
      "Offizielle Datenschutz- und Supportinformationen für die MyBalcony App.",
  },
  {
    code: "en",
    label: "English",
    privacy: "Privacy",
    support: "Support",
    intro:
      "Official privacy and support information for the MyBalcony app.",
  },
  {
    code: "zh",
    label: "简体中文",
    privacy: "隐私政策",
    support: "支持",
    intro: "MyBalcony App 的官方隐私与支持信息。",
  },
] as const;

export default function Home() {
  return (
    <main className="landing-shell">
      <section className="landing-hero" aria-labelledby="site-title">
        <div className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">MYBALCONY</p>
        <h1 id="site-title">Privacy &amp; Support</h1>
        <p className="landing-lead">
          Transparent, local-first balcony planning — with clear choices in
          German, English and Simplified Chinese.
        </p>
      </section>

      <section className="language-grid" aria-label="Choose a language">
        {languages.map((language) => (
          <article className="language-card" key={language.code}>
            <p className="language-label">{language.label}</p>
            <p>{language.intro}</p>
            <div className="card-actions">
              <Link
                className="button button-primary"
                href={`/${language.code}/privacy`}
              >
                {language.privacy}
              </Link>
              <Link
                className="button button-secondary"
                href={`/${language.code}/support`}
              >
                {language.support}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="landing-footer">
        <p>MyBalcony · Yize Sun</p>
        <a href="mailto:martin.yize.sun@gmail.com">
          martin.yize.sun@gmail.com
        </a>
      </footer>
    </main>
  );
}
