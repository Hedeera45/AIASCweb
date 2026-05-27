import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "AIASC - Asociación de Ingenieros Agrónomos del Sur de Córdoba",
  description:
    "Sitio oficial de la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export const viewport: Viewport = {
  width: 1200,
  initialScale: 0.8,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceSans.variable}>
      <body>
        <div className="container">
          {/* ---- HEADER ---- */}
          <header className="header-grid">
            <div className="logo-area">
              <picture>
                <source srcSet="/logo-mobile.png" media="(max-width: 800px)" />
                <img src="/logo.png" alt="AIASC Logo" />
              </picture>
            </div>
            <div className="cover-area">
              <img src="/cover3b.png" alt="AIASC - Evento en campo" />
            </div>
            <div className="nav-spacer" />
            <nav className="nav-bar">
              <ul className="nav-links">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/publicaciones">Publicaciones</Link>
                </li>
                <li>
                  <Link href="/sobre">Organización</Link>
                </li>
                <li>
                  <Link href="/historia">Historia</Link>
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
