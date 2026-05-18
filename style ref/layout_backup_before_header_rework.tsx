import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
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
  description:
    "Sitio oficial de la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${jakarta.variable}`}>
      <body>
        <div className="container">
          {/* ---- HEADER ---- */}
          <div className="top-white-band" />
          <header className="header-grid">
            <div className="logo-area">AIASC LOGO</div>
            <div className="cover-area">
              <img src="/cover.png" alt="AIASC - Evento en campo" />
            </div>
            <nav className="nav-bar">
              <ul className="nav-links">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/publicaciones">Publicaciones</Link>
                </li>
                <li>
                  <Link href="/sobre">Sobre la AIASC</Link>
                </li>
                <li>
                  <Link href="/historia">Historia de la AIASC</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* ---- PAGE CONTENT ---- */}
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
