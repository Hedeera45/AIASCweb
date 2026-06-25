"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DropdownGroup = {
  groupLabel: string;
  groupHref: string;
  items?: { href: string; label: string }[];
};

type NavLink = {
  href: string;
  label: string;
  dropdown?: DropdownGroup[];
};

export default function Navbar() {
  const pathname = usePathname();
  const isAlternativa = pathname.startsWith("/alternativa");
  const prefix = isAlternativa ? "/alternativa" : "";

  const links: NavLink[] = [
    { href: `${prefix}/`, label: "Novedades" },
    { href: `${prefix}/publicaciones`, label: "Publicaciones" },
    { 
      href: `${prefix}/institucional`, 
      label: "Institucional",
      dropdown: [
        {
          groupLabel: "Colegio",
          groupHref: `${prefix}/institucional`,
          items: [
            { href: `${prefix}/institucional#quienes-somos`, label: "Quiénes somos" },
            { href: `${prefix}/institucional#preguntas-frecuentes`, label: "Preguntas frecuentes" },
            { href: `${prefix}/institucional#autoridades`, label: "Autoridades" },
            { href: `${prefix}/historia`, label: "Historia" },
            { href: `${prefix}/institucional#galeria`, label: "Galería" },
          ],
        },
        {
          groupLabel: "Mesa BPA",
          groupHref: `${prefix}/mesa-bpa`,
        },
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
                  {link.dropdown.map((group) => (
                    <div key={group.groupHref} className="dropdown-group">
                      <Link href={group.groupHref} className="dropdown-group-title">
                        {group.groupLabel}
                      </Link>
                      {group.items?.map((sublink) => (
                        <Link key={sublink.href} href={sublink.href} className="dropdown-sub-item">
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
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

