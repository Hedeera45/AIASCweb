import Link from "next/link";

/* Placeholder data — in production this would come from a DB or CMS */
const publicaciones: Record<string, { nombre: string; fecha: string; texto: string }> = {
  "1": {
    nombre: "Informe Técnico Nº 45 - Manejo de suelos",
    fecha: "28/04/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
  "2": {
    nombre: "Boletín Mensual - Abril 2026",
    fecha: "15/04/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
  "3": {
    nombre: "Guía de Buenas Prácticas Agrícolas",
    fecha: "02/04/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
  "4": {
    nombre: "Acta de Asamblea Ordinaria 2026",
    fecha: "20/03/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
  "5": {
    nombre: "Revista AIASC Nº 12",
    fecha: "01/03/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
  "6": {
    nombre: "Informe de Campaña Fina 2025/26",
    fecha: "15/02/2026",
    texto:
      "Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto.",
  },
};

export default async function PublicacionDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pub = publicaciones[id];

  if (!pub) {
    return (
      <>
        <h1 className="page-title">Publicación no encontrada</h1>
        <hr className="green-rule" />
        <p>La publicación solicitada no existe.</p>
        <Link href="/alternativa/publicaciones" className="section-more">
          ← Volver a Publicaciones
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="pub-detail-header">
        <h1 className="page-title">{pub.nombre}</h1>
        <a href="#" className="pub-download">
          Descargar archivo
        </a>
      </div>
      <hr className="green-rule" />
      <p className="pub-detail-body">{pub.texto}</p>

      <Link href="/alternativa/publicaciones" className="section-more" style={{ marginTop: 32, display: "inline-block" }}>
        ← Volver a Publicaciones
      </Link>
    </>
  );
}
