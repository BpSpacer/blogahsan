import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/dashboard/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/frontend/Footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Blog Ahsan",
  description: "Created by Ahsan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-1973129170732368" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1973129170732368"
          crossOrigin="anonymous"></script>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}