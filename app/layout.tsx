import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/header/header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YangYang Dev",
  description: "My portfolio website",
};

// const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// const GA_ID = "G-LYZFK54VCS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AntdRegistry>{children}</AntdRegistry>

        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-LYZFK54VCS`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-LYZFK54VCS');
      `}
          </Script>
        </>
      </body>
    </html>
  );
}
