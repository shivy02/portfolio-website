import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { data } from "@/data/data";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivypatel.com"),
  title: "Shivam Patel - Software Engineer",
  description: "A beautiful portfolio showcasing my work as a software engineer.",
  icons: {
    icon: [
      { url: "/logo/logo.svg", type: "image/svg+xml" },       
      { url: "/favicon-196.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://shivypatel.com",
    title: "Shivam Patel — Portfolio",
    description: "Portfolio of Shivam Patel.",
    images: [
      { url: "/og/website-screenshot.jpg", width: 1200, height: 630, alt: "Website preview" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar navItems={data.nav} />
          <Image
            src="/layout/background-ellipse2.svg"
            alt=""
            fill={false}
            width={0}
            height={0}
            className="z-1 blur-lg absolute max-w-5xl top-0 left-1/2 transform -translate-x-1/2 -translate-y-5/9 w-full pointer-events-none select-none"
            aria-hidden="true"
            priority
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
