import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/app/components/dashboard/ThemeProvider";
import Footer from "@/app/components/frontend/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://adsbyahsan.com/"),
  title: {
    default: "AdsByAhsan - Blogs from AdsByAhsan",
    template: '%s | AdsByAhsan - Blogs from AdsByAhsan'
  },
  description: "Blogs from AdsByAhsan!",
  openGraph: {
    title: "AdsByAhsan - Blogs from AdsByAhsan",
    description: "A blog for developers by developers!",
    type: "website",
    locale: "en_US",
    url: "https://adsbyahsan.com/",
    siteName: "AdsByAhsan"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <Head>
            <meta name="google-adsense-account" content="ca-pub-1973129170732368"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1973129170732368"
     crossOrigin="anonymous"></script>
      </Head>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}