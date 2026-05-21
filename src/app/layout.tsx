import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'UK Realty | İstanbul Lüks Gayrimenkul & Yatırım',
  description: 'İstanbul\'da lüks satılık ve kiralık daireler, profesyonel yatırım danışmanlığı ve yüksek kazançlı yatırım fırsatları için UK Realty.',
  openGraph: {
    "title": "UK Realty | İstanbul Lüks Gayrimenkul",
    "description": "İstanbul'un en seçkin projeleri ve profesyonel danışmanlık hizmetleri.",
    "siteName": "UK Realty"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
