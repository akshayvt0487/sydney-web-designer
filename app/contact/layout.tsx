import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description: "Get in touch with Sydney's leading web design agency. Request a free quote or consultation. Call us or fill out our contact form. Fast response guaranteed!",
  keywords: "contact web designer sydney, web design quote, free consultation sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/contact",
  ogImage: "/images/og/contact.svg",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
