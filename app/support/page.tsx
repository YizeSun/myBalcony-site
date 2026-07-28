import Link from "next/link";

export default function SupportRedirect() {
  return (
    <main className="landing-shell">
      <meta httpEquiv="refresh" content="0; url=../de/support/" />
      <p>
        <Link className="text-link" href="/de/support">
          Support öffnen
        </Link>
      </p>
    </main>
  );
}
