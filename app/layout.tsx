import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupFormProvider from "@/components/PopupFormProvider";
import { generateOrganizationSchema } from "@/lib/schemas";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-editorial",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sydneywebdesigner.com.au"),
  title: "Sydney Web Designer | Web Design & Digital Marketing",
  description:
    "Sydney Web Designer is Sydney's premier web design and digital marketing studio. Specialising in custom web design, SEO, and branding - serving Sydney businesses since 2013.",
  keywords:
    "web design sydney, digital marketing sydney, seo services sydney, web development sydney, sydney web designer",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "E_byFO3Fss-ps99NPqsLJ5lCbX1RDEQs7iCVDU8s0s0",
  },
  openGraph: {
    title:
      "Sydney Web Designer | Professional Web Design & Digital Marketing Services",
    description:
      "Sydney's premier web design and digital marketing agency. 13+ years experience, 500+ websites delivered. Custom web design, SEO, branding & more.",
    url: "https://www.sydneywebdesigner.com.au",
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
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <meta name="msapplication-TileColor" content="#c85c2c" />
        <meta name="theme-color" content="#181d26" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>

      <body className="font-sans antialiased text-slate-600 bg-slate-50 selection:bg-primary-orange/20 selection:text-primary-navy">
        <PopupFormProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PopupFormProvider>
      </body>
    </html>
  );
}
