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
  ogType?: string; // For dynamic OG image generation
}

// Helper function to generate OG image URL
function generateOGImageUrl(title: string, description: string, ogType: string = "service"): string {
  const baseUrl = "https://sydneywebdesigner.com.au";
  const params = new URLSearchParams({
    title,
    description: description.slice(0, 100),
    type: ogType,
  });
  return `${baseUrl}/api/og?${params.toString()}`;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  ogType = "service",
}: PageMetadata): Metadata {
  const siteName = "Sydney Web Designer";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://sydneywebdesigner.com.au";

  // Use dynamic OG image if no custom image provided
  const finalOgImage = ogImage || generateOGImageUrl(title, description, ogType);

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
          url: finalOgImage,
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
      images: [finalOgImage],
      creator: "@dsignsaustralia",
      site: "@dsignsaustralia",
    },
    // Verification tags
    verification: {
      // Add Google Search Console verification when available
      // google: "your-google-verification-code",
    },
    // Additional metadata
    metadataBase: new URL(baseUrl),
    category: ogType,
  };
}
