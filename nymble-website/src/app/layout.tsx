import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NymbleAI - AI-Powered Business Solutions",
  description: "Transform your business with custom AI solutions and NymbleSense, our interaction intelligence platform. Build intelligent automation and AI-powered insights.",
  keywords: "AI, artificial intelligence, business automation, NymbleSense, custom AI development, interaction intelligence",
  authors: [{ name: "NymbleAI" }],
  openGraph: {
    title: "NymbleAI - AI-Powered Business Solutions",
    description: "Transform your business with custom AI solutions and NymbleSense, our interaction intelligence platform.",
    url: "https://nymbleai.com",
    siteName: "NymbleAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NymbleAI - AI-Powered Business Solutions",
    description: "Transform your business with custom AI solutions and NymbleSense, our interaction intelligence platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
