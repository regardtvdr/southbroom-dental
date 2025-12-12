import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southbroom Dental - Your Trusted Dental Care in Southbroom, South Africa",
  description: "Your Smile Says It All! Professional dental services in Southbroom, South Africa. General dentistry, cosmetic procedures, orthodontics, and more.",
  keywords: "dentist, dental care, Southbroom, Margate, South Africa, dental services, orthodontics, teeth cleaning",
  authors: [{ name: "Southbroom Dental" }],
  openGraph: {
    title: "Southbroom Dental - Your Smile Says It All!",
    description: "Your Smile Says It All! Professional dental services in Southbroom, South Africa",
    type: "website",
    locale: "en_ZA",
  },
  icons: {
    icon: "/logo south.png",
    shortcut: "/logo south.png",
    apple: "/logo south.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-beach-ocean focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beach-ocean"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

