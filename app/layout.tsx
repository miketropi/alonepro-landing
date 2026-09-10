import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlonePro · Native Gutenberg Nonprofit Charity",
  description:
    "AlonePro is a premium native Gutenberg WordPress theme for nonprofit, charity, fundraising, NGO, humanitarian, community, and social-impact websites.",
  openGraph: {
    title: "AlonePro · Native Gutenberg Nonprofit Charity WordPress Theme",
    description:
      "AlonePro brings professionally designed nonprofit layouts, flexible customization, responsive foundations, and a lightweight native Gutenberg workflow into one focused theme.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
