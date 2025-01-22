import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/dashboard/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "AdsByAhsan",
  description: "Created with ❤️ By Ahsan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Created with ❤️ By Ahsan" />
        <meta name="author" content="Ahsan" />
        <meta name="keywords" content="ads, marketing, advertising, digital marketing" />
        <meta property="og:title" content="AdsByAhsan" />
        <meta property="og:description" content="Created with ❤️ By Ahsan" />
        <meta property="og:image" content="@/public/logo-dark.pnh" />
        <meta property="og:url" content="https://adsbyahsan.com" />
        <link rel="canonical" href="https://adsbyahsan.com" />
      </head>
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
