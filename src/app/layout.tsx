import type { Metadata } from "next";
import Navbar from '@/components/Navbar'; // Importe o componente Navbar
import Footer from '@/components/Footer'; // Importe o componente Footer
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bene Beneficiado",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        <div className="h-full overflow-y-auto custom-scrollbar">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}