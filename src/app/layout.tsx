import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import WhatsAppFloatedButton from "@/components/WhatsAppFloatedButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "THE CASTLE",
  description:
    "تشكيلة مختارة من الساعات الفاخرة للرجال بتصاميم عصرية وضمان ذهبي.",
  keywords: ["ساعات", "ساعات رجالي", "ساعات فخمة", "الإمارات", "the castle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${tajawal.className} antialiased`}>
        <Header />
        {children}
        <WhatsAppFloatedButton />
        <Footer />
      </body>
    </html>
  );
}
