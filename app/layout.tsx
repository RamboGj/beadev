import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeaDev | Your Technology Hub",
  description: "BeaDev | Your Technology Hub",
  openGraph: {
    title: "BeaDev | Your Technology Hub",
    description: "BeaDev | Your Technology Hub",
    images: [
      {
        url: '/og.png'
      },
      {
        url: './favicon.ico'
      }
    ]
  },
  icons: [
    './favicon.ico'
  ],
}
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
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
