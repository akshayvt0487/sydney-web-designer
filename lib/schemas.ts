import { contactInfo } from "./constants";

// LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": contactInfo.companyName,
    "image": "https://sydneywebdesigner.com.au/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${contactInfo.address.suite}, ${contactInfo.address.street}`,
      "addressLocality": contactInfo.address.suburb,
      "addressRegion": contactInfo.address.state,
      "postalCode": contactInfo.address.postcode,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.geo.latitude,
      "longitude": contactInfo.geo.longitude
    },
    "telephone": contactInfo.phoneLink,
    "email": contactInfo.email,
    "url": "https://sydneywebdesigner.com.au",
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };
}

// Service Schema
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  price?: string,
  priceType: "one-time" | "monthly" = "one-time"
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": contactInfo.companyName
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    }
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "AUD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": price,
        "priceCurrency": "AUD",
        "unitText": priceType === "monthly" ? "monthly" : "one-time"
      }
    };
  }

  return schema;
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Article Schema (for blog posts)
export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  imageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": contactInfo.companyName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://sydneywebdesigner.com.au/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "image": imageUrl
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": contactInfo.companyName,
    "alternateName": contactInfo.tradingAs,
    "url": "https://sydneywebdesigner.com.au",
    "logo": "https://sydneywebdesigner.com.au/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": contactInfo.phoneLink,
      "contactType": "customer service",
      "email": contactInfo.email,
      "areaServed": "AU",
      "availableLanguage": "English"
    },
    "sameAs": [
      contactInfo.social.facebook,
      contactInfo.social.instagram,
      contactInfo.social.linkedin
    ]
  };
}

// Review Schema
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date: string;
}>) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.text,
    "datePublished": review.date,
    "publisher": {
      "@type": "Organization",
      "name": contactInfo.companyName
    }
  }));
}
