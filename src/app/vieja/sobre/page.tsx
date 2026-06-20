import Link from "next/link";

export default function SobrePage() {
  return (
    <>
      <h1 className="page-title">Sobre la AIASC</h1>
      <hr className="green-rule" />

      <ul className="sobre-links">
        <li>
          <Link href="/sobre/estructura">Estructura organizativa</Link>
        </li>
        <li>
          <Link href="/sobre/cobros">
            Cobros y servicios de la AIASC – Caja jubilatoria y otros sistemas
          </Link>
        </li>
      </ul>
    </>
  );
}
