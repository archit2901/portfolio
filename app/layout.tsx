import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Portfolio`,
  description: PERSONAL_INFO.tagline,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://architgupta.com",
    title: `${PERSONAL_INFO.name} | Portfolio`,
    description: PERSONAL_INFO.tagline,
    siteName: PERSONAL_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Portfolio`,
    description: PERSONAL_INFO.tagline,
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
