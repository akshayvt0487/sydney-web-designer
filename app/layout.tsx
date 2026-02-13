import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupFormProvider from "@/components/PopupFormProvider";
import ThreeBackground from "@/components/ThreeBackground";
import { generateOrganizationSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  metadataBase: new URL("https://sydneywebdesigner.com.au"),
  title: "Sydney Web Designer | Professional Web Design & Digital Marketing Services",
  description: "Sydney's premier web design and digital marketing agency. 13+ years experience, 500+ websites delivered. Custom web design, SEO, branding & more. Get a free quote today!",
  keywords: "web design sydney, digital marketing sydney, seo services sydney, web development sydney, sydney web designer",
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
    <html lang="en-AU">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="theme-color" content="#1e293b" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
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
        <ThreeBackground />
        <PopupFormProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PopupFormProvider>
      </body>
    </html>
  );
}
