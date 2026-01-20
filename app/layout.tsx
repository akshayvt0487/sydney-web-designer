import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupFormProvider from "@/components/PopupFormProvider";

export const metadata: Metadata = {
  title: "Sydney Web Designer | Web Design & Digital Marketing | DSIGNS AUSTRALIA",
  description: "Professional web design and digital marketing services in Sydney. 13+ years experience, 500+ websites delivered. Get a free quote today!",
  keywords: "web design sydney, digital marketing sydney, seo services sydney, web development sydney",
  openGraph: {
    title: "Sydney Web Designer | Web Design & Digital Marketing",
    description: "Professional web design and digital marketing services in Sydney. 13+ years experience, 500+ websites delivered.",
    url: "https://sydneywebdesigner.com.au",
    siteName: "DSIGNS AUSTRALIA",
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
    <html lang="en">
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
