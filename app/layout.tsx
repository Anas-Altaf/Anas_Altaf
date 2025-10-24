import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/wrapped/floating-dock";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google';
// Configure Poppins
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist",
  description:
    "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions. Expert in mobile app development, AI/ML integration, and full-stack development.",
  keywords: [
    "Flutter Developer",
    "React Native Developer",
    "AI Expert",
    "Mobile App Developer",
    "Cross Platform Development",
    "AI ML Developer",
    "Flutter Apps",
    "React Native Apps",
    "Mobile Development",
    "Anas Altaf"
  ],
  authors: [{ name: "Anas Altaf" }],
  creator: "Anas Altaf",
  publisher: "Anas Altaf",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist",
    description: "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions.",
    url: "https://yourdomain.com",
    siteName: "Anas Altaf Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add this image to public folder
        width: 1200,
        height: 630,
        alt: "Anas Altaf - Flutter Developer & AI Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Altaf - Flutter Developer | React Native Expert | AI Specialist",
    description: "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anas Altaf",
              "jobTitle": "Flutter Developer & React Native Expert",
              "description": "Professional Flutter Developer & React Native Expert specializing in cross-platform mobile apps and AI-powered solutions",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://github.com/yourgithub", // Replace with your GitHub
                "https://linkedin.com/in/yourlinkedin", // Replace with your LinkedIn
                "https://twitter.com/yourtwitter" // Replace with your Twitter
              ],
              "knowsAbout": [
                "Flutter Development",
                "React Native Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Mobile App Development",
                "Cross Platform Development",
                "Dart Programming",
                "JavaScript",
                "Python"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Mobile App Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Pakistan"
                }
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Your University" // Replace with your university
              }
            })
          }}
        />
      </head>
      <body className={` dark ${poppins.variable} antialiased`}>
        {children}
        <FloatingDockDemo />
        <Analytics />
        <GoogleAnalytics gaId="your-ga4-measurement-id" /> {/* Replace with your GA4 ID */}
      </body>
    </html>
  );
}