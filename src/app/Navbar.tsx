"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isAlternativa = pathname.startsWith("/alternativa");
  const prefix = isAlternativa ? "/alternativa" : "";

  const links = [
    { href: `${prefix}/`, label: "Novedades" },
    { href: `${prefix}/publicaciones`, label: "Publicaciones" },
    { 
      href: `${prefix}/institucional`, 
      label: "Institucional",
      dropdown: [
        { href: `${prefix}/institucional#preguntas-frecuentes`, label: "Preguntas frecuentes" },
        { href: `${prefix}/institucional#autoridades`, label: "Autoridades" },
        { href: `${prefix}/institucional#nuestra-mision`, label: "Nuestra misión" },
      ]
    },
    { href: `${prefix}/servicios`, label: "Servicios" },
    { href: `${prefix}/asociate`, label: "Asociate" },
    { href: `${prefix}/contacto`, label: "Contacto" },
  ];

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        {links.map((link) => {
          const home = `${prefix}/`;
          const isActive = link.href === home 
            ? pathname === home || pathname === home.slice(0, -1)
            : pathname.startsWith(link.href.split("#")[0]);

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
