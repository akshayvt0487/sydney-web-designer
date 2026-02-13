import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = "/og-image.svg",
  canonicalUrl,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: PageMetadata): Metadata {
  const siteName = "Sydney Web Designer";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://sydneywebdesigner.com.au";

  return {
    title: fullTitle,
    description,
    keywords: keywords || "web design sydney, digital marketing sydney, seo services sydney, web development sydney",
    authors: [{ name: author || "DSIGNS" }],
    creator: "DSIGNS",
    publisher: "DSIGNS",
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl || baseUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || baseUrl,
      siteName,
      locale: "en_AU",
      type,
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [author || "DSIGNS"],
      }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@sydneywebdesigner",
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}
