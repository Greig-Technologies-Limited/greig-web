import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greig Technologies Limited | Satellite & Maritime Communications",
  description:
    "Connecting vessels, enterprises, and infrastructure across West Africa and beyond. Satellite VSAT, maritime communications, and enterprise networking solutions since 2009.",
  keywords: [
    "VSAT Nigeria",
    "maritime satellite communication",
    "Ku-band Ka-band C-band satellite",
    "internet service provider Nigeria",
    "marine stabilized antenna",
    "offshore telecommunications",
    "Lagos Nigeria telecom",
  ],
  authors: [{ name: "Greig Technologies Limited" }],
  openGraph: {
    title: "Greig Technologies Limited",
    description:
      "Satellite & maritime communications across West Africa. VSAT, enterprise networking, and offshore connectivity.",
    url: "https://www.greigtechnologies.com",
    siteName: "Greig Technologies Limited",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greig Technologies Limited",
    description: "Satellite & maritime communications across West Africa.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-950 text-white antialiased">{children}</body>
    </html>
  );
}
