// Structured Data for SEO
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveRepairShop",
  "name": "Jonas Auto & Truck Maintenance & Repair",
  "alternateName": "Jonas Auto",
  "description": "Expert automotive maintenance and repair services. Certified technicians, quality service, and competitive pricing for over 20 years.",
  "url": "https://jonastruckandautorepair.com",
  "logo": "https://jonastruckandautorepair.com/logo.png",
  "image": "https://jonastruckandautorepair.com/logo.png",
  "telephone": "+1-403-123-4567",
  "email": "info@jonastruckandautorepair.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5235 28 Ave SE",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2B 3W3",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.0447",
    "longitude": "-114.0719"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "CAD",
  "areaServed": {
    "@type": "City",
    "name": "Calgary",
    "containedInPlace": {
      "@type": "Province",
      "name": "Alberta"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oil Change & Maintenance",
          "description": "Keep your vehicle running smoothly with our comprehensive maintenance services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brake Services",
          "description": "Expert brake inspection, repair, and replacement services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engine Diagnostics",
          "description": "Advanced diagnostic tools and experienced technicians"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heavy Equipment Repair",
          "description": "Specialized repair services for trucks and heavy equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVI & CVIP Inspection",
          "description": "Official vehicle inspections for commercial and personal vehicles"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  },
  "foundingDate": "2003",
  "numberOfEmployees": "10",
  "slogan": "Professional Auto & Truck Service You Can Trust"
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jonas Auto & Truck Maintenance & Repair",
  "url": "https://jonastruckandautorepair.com",
  "logo": "https://jonastruckandautorepair.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/jonasauto",
    "https://www.instagram.com/jonasauto"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-403-123-4567",
    "contactType": "customer service",
    "areaServed": "CA",
    "availableLanguage": "English"
  }
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://jonastruckandautorepair.com${item.url}`
  }))
});
