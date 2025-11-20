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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Canonical URL */}
        <link rel="canonical" href="https://contoursanalytics.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect fill='%23038bca' width='32' height='32' rx='8'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' fill='white' font-weight='bold' font-size='18'>CA</text></svg>"
        />
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
