import Link from "next/link";

export default function PrivacyRedirect() {
  return (
    <main className="landing-shell">
      <meta httpEquiv="refresh" content="0; url=../de/privacy/" />
      <p>
        <Link className="text-link" href="/de/privacy">
          Datenschutzerklärung öffnen
        </Link>
      </p>
    </main>
  );
}
