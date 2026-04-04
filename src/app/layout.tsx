import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankara Abiye Ayakkabı | Gelin Ayakkabıları - Kızılay",
  description:
    "Ankara Kızılay'da gelin ayakkabıları ve abiye ayakkabı koleksiyonu. Özel günleriniz için zarif ve konforlu ayakkabılar. İzmir-1 Caddesi No:29/3, Çankaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=867a733c-51fc-4ad0-94d7-329134553ad8" defer></script>
      </body>
    </html>
  );
}
