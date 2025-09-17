import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/header";
import { SanityLive } from '@/sanity/lib/live'


export const metadata: Metadata = {
  title: "Samewave 7",
  description: "Art collective",
  openGraph: {
    title: 'Samewave 7',
    description: 'Fiber art collective',
    url: 'https://www.samewave7.com/',
    siteName: 'Samewave 7',
    images: [
      {
        url: 'https://www.samewave7.com/stitch_logo.png',
        width: 860,
        height: 803,
        alt: 'Hope Retreats in Normandy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
