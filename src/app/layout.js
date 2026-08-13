import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://my-portfolio-three-flame-40.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Zeeshan Ahmad - Software Engineer | Full Stack Developer",
    template: "%s | Zeeshan Ahmad",
  },

  description:
    "Zeeshan Ahmad is a Gold Medalist Software Engineer specializing in React, Next.js, Node.js, React Native, and modern web application development.",

  keywords: [
    "Zeeshan Ahmad",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Zeeshan Ahmad",
      url: SITE_URL,
    },
  ],

  creator: "Zeeshan Ahmad",
  publisher: "Zeeshan Ahmad",

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zeeshan Ahmad - Software Engineer",
    title: "Zeeshan Ahmad - Software Engineer | Full Stack Developer",
    description:
      "Gold Medalist Software Engineer specializing in React, Next.js, Node.js, React Native, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeeshan Ahmad - Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Ahmad - Software Engineer | Full Stack Developer",
    description:
      "Gold Medalist Software Engineer specializing in React, Next.js, Node.js, React Native, and modern web technologies.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
