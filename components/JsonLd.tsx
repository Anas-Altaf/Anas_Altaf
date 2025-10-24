import React from 'react';

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Project Schema Component
export function ProjectJsonLd({ project }: { project: Record<string, unknown> }) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "MobileApplication",
    "operatingSystem": "Android, iOS",
    "author": {
      "@type": "Person",
      "name": "Anas Altaf"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": Array.isArray(project.technologies) ? project.technologies.join(", ") : "",
    "screenshot": Array.isArray(project.images) ? project.images[0] : "",
    "datePublished": project.date,
    "url": `https://yourdomain.com/projects/${project.slug}`
  };

  return <JsonLd data={projectSchema} />;
}

// Organization Schema Component
export function OrganizationJsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anas Altaf Development",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "description": "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions",
    "founder": {
      "@type": "Person",
      "name": "Anas Altaf"
    },
    "sameAs": [
      "https://github.com/yourgithub",
      "https://linkedin.com/in/yourlinkedin",
      "https://twitter.com/yourtwitter"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-XXX-XXXXXXX", // Replace with your phone
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  return <JsonLd data={orgSchema} />;
}

// Service Schema Component
export function ServiceJsonLd({ service }: { service: Record<string, unknown> }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": "Anas Altaf"
    },
    "serviceType": "Software Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flutter Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Native Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI/ML Integration"
          }
        }
      ]
    }
  };

  return <JsonLd data={serviceSchema} />;
}