import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";

/* ============================================
   FONTS — Inter for body, Playfair Display for headings
   ============================================ */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  title: "Prashant Tandon — Co-Founder & CEO, Tata 1mg",
  description:
    "Prashant Tandon is the Co-Founder & CEO of Tata 1mg, India's largest digital health platform. IIT Delhi and Stanford GSB alumnus building healthcare for a billion Indians.",
  keywords: [
    "Prashant Tandon",
    "Tata 1mg",
    "digital healthcare",
    "health tech",
    "India",
    "CEO",
    "IIT Delhi",
    "Stanford",
  ],
  openGraph: {
    title: "Prashant Tandon — Co-Founder & CEO, Tata 1mg",
    description:
      "Building healthcare for a billion Indians. Co-Founder & CEO of Tata 1mg.",
    type: "website",
    locale: "en_IN",
    /* TODO: Replace with actual OG image */
    images: ["/images/prashant.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Tandon — Co-Founder & CEO, Tata 1mg",
    description:
      "Building healthcare for a billion Indians. Co-Founder & CEO of Tata 1mg.",
  },
};

/* ============================================
   ROOT LAYOUT
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
