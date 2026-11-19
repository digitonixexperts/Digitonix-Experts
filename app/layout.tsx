import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digitonix Experts | Digital Solutions That Move Business Forward",
  description: "Digitonix Experts helps ambitious US businesses grow with website development, WordPress, Shopify, SEO, digital marketing, branding, graphic design, and app development.",
  metadataBase: new URL("https://digitonixexperts.com"),
  openGraph: {
    title: "Digitonix Experts",
    description: "Digital solutions that move your business forward.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
