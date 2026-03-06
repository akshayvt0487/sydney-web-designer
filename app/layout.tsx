import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupFormProvider from "@/components/PopupFormProvider";
import { generateOrganizationSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  metadataBase: new URL("https://sydneywebdesigner.com.au"),
  title: "Sydney Web Designer | Professional Web Design & Digital Marketing Services",
  description: "Sydney's premier web design and digital marketing agency. 13+ years experience, 500+ websites delivered. Custom web design, SEO, branding & more. Get a free quote today!",
  keywords: "web design sydney, digital marketing sydney, seo services sydney, web development sydney, sydney web designer",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sydney Web Designer | Professional Web Design & Digital Marketing Services",
    description: "Sydney's premier web design and digital marketing agency. 13+ years experience, 500+ websites delivered. Custom web design, SEO, branding & more.",
    url: "https://sydneywebdesigner.com.au",
    siteName: "Sydney Web Designer",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="theme-color" content="#1e293b" />

        {/* Google Fonts - Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
      </head>
      <body>
        <PopupFormProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PopupFormProvider>
      </body>
    </html>
  );
}
