import type { Metadata, Viewport } from "next";
import "./globals.css";

const hostedBasePath =
  process.env.GITHUB_ACTIONS === "true" ? "/myBalcony-site" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://yizesun.github.io"),
  title: {
    default: "MyBalcony Privacy & Support",
    template: "%s · MyBalcony",
  },
  description:
    "Official privacy policy, privacy choices and support for the MyBalcony app.",
  applicationName: "MyBalcony",
  authors: [{ name: "Yize Sun" }],
  icons: {
    icon: `${hostedBasePath}/favicon.svg`,
    shortcut: `${hostedBasePath}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    siteName: "MyBalcony",
    title: "MyBalcony Privacy & Support",
    description:
      "Clear information about on-device data, permissions, solar calculations and support.",
    images: [
      {
        url: "/myBalcony-site/mybalcony-privacy-social.png",
        width: 1749,
        height: 909,
        alt: "A private on-device balcony model visualised inside a protected data boundary.",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07100f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
