import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://architgupta.me"),
  title: {
    default: `${PERSONAL_INFO.name} | Software Engineer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: "Software Engineer specializing in full-stack development with React, Node.js, .NET, and AI/ML. Currently pursuing MS in Computer Science at Northeastern University.",
  keywords: [
    "Archit Gupta",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    ".NET Developer",
    "C#",
    "MongoDB",
    "Boston Software Engineer",
    "Northeastern University",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://architgupta.me" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://architgupta.me",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: "Software Engineer specializing in full-stack development with React, Node.js, .NET, and AI/ML.",
    siteName: PERSONAL_INFO.name,
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: PERSONAL_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: "Software Engineer specializing in full-stack development with React, Node.js, .NET, and AI/ML.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
