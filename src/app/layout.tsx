import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NUMINOUS",
  description:
    "NUMINOUS is a next-generation IT solutions provider, transforming businesses through innovative digital experiences. Beyond Innovation. Into the Numinous.",
  keywords: [
    "NUMINOUS",
    "IT Solutions",
    "Nextgen Tech",
    "Digital Transformation",
    "Innovative Software Company",
    "Technology Partner",
    "Business Innovation",
  ],
  icons: {
    icon: "nm.jpeg",
  },
  openGraph: {
    title: "NUMINOUS",
    description:
      "Beyond Innovation. Into the Numinous. Explore cutting-edge IT solutions with NUMINOUS.",
  },
  twitter: {
    title: "NUMINOUS",
    description: "Nextgen IT Solutions. Beyond Innovation. Into the Numinous.",
  },
  authors: [{ name: "NUMINOUS Team", url: "https://numinous.tech" }],
  creator: "NUMINOUS",
  publisher: "NUMINOUS",
  metadataBase: new URL("https://numinous.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
