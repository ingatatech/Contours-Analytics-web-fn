import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Contours Analytics - Data Analytics & Actuarial Services",
  description: "Leading provider of comprehensive data analytics, actuarial services, and business intelligence solutions. Transform your data into strategic insights.",
  keywords: "data analytics, actuarial services, business intelligence, credit rating, risk assessment",
  authors: [{ name: "Contours Analytics" }],
  metadataBase: new URL("https://contoursanalytics.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://contoursanalytics.com",
    siteName: "Contours Analytics",
    title: "Contours Analytics - Data Analytics & Actuarial Services",
    description: "Transform your data into strategic insights with our comprehensive analytics and actuarial services.",
    images: [
      {
        url: "https://contoursanalytics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contours Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contours Analytics",
    description: "Data Analytics & Actuarial Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={inter.variable}>
       <head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="apple-touch-icon" type="image/png" href="/image.png" />
				<link rel="icon" type="image/png" href="/image.png" />
			</head>
      <body className="antialiased">
        <Toaster position="top-right" />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
