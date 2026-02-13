import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Career Application | Join Our Team at Sydney Web Designer",
  description: "Apply to join Sydney Web Designer. Submit your application and become part of our award-winning web design and digital marketing team.",
  keywords: "web design jobs sydney, digital marketing careers, sydney web designer jobs",
  canonicalUrl: "https://sydneywebdesigner.com.au/career-application",
});

export default function CareerApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
