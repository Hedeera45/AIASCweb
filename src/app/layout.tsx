import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "AIASC - Asociación de Ingenieros Agrónomos del Sur de Córdoba",
  description: "Sitio oficial de la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${jakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
