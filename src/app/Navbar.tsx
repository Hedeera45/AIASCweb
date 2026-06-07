"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/publicaciones", label: "Publicaciones" },
    { href: "/sobre", label: "Organización" },
    { href: "/historia", label: "Historia" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        {links.map((link) => {
          // Highlight "Inicio" exactly on "/", and others on their path or nested sub-paths (e.g. publication details)
          const isActive = link.href === "/" 
            ? pathname === "/" 
            : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
