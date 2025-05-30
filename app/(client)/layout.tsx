import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/dashboard/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adsbyahsan.com/"),
  title: {
    default: "Blog Ahsan – Post Blogs, Download Free Resources",
    template: "%s | Blog Ahsan – Free Blogs, Courses, Apps & More",
  },
  description:
    "Blog Ahsan is a free platform where anyone can publish blogs and access free courses, apps, themes, software, and more!",
  openGraph: {
    title: "Blog Ahsan – Free Blogs, Courses, Apps & More",
    description:
      "Join Blog Ahsan to post your blogs freely and access a wide range of free resources including courses, apps, themes, and software.",
    type: "website",
    locale: "en_US",
    url: "https://adsbyahsan.com/",
    siteName: "Blog Ahsan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Ahsan – Free Blogs, Courses, Apps & More",
    description:
      "Publish your blogs for free and explore a wide variety of free educational and digital resources on Blog Ahsan.",
    site: "@your_twitter_handle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <ThemeProvider>
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
