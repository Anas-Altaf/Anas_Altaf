import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Professional portfolio built with Next.js & Aceternity UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` dark ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
