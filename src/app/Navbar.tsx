"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/publicaciones", label: "Publicaciones" },
    { 
      href: "/institucional", 
      label: "Institucional",
      dropdown: [
        { href: "/institucional#historia", label: "Historia" },
        { href: "/institucional#autoridades", label: "Autoridades" },
        { href: "/institucional#nuestra-mision", label: "Nuestra misión" },
        { href: "/institucional#servicios", label: "Servicios" },
      ]
    },
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
            <li key={link.href} className={link.dropdown ? "dropdown" : ""}>
              <Link href={link.href} className={isActive ? "active" : ""}>
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="dropdown-content">
                  {link.dropdown.map((sublink) => (
                    <Link key={sublink.href} href={sublink.href}>
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
