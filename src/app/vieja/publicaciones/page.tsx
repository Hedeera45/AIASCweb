import Link from "next/link";

const publicaciones = [
  { id: "1", nombre: "Informe Técnico Nº 45 - Manejo de suelos", fecha: "28/04/2026" },
  { id: "2", nombre: "Boletín Mensual - Abril 2026", fecha: "15/04/2026" },
  { id: "3", nombre: "Guía de Buenas Prácticas Agrícolas", fecha: "02/04/2026" },
  { id: "4", nombre: "Acta de Asamblea Ordinaria 2026", fecha: "20/03/2026" },
  { id: "5", nombre: "Revista AIASC Nº 12", fecha: "01/03/2026" },
  { id: "6", nombre: "Informe de Campaña Fina 2025/26", fecha: "15/02/2026" },
];

export default function PublicacionesPage() {
  return (
    <>
      <h1 className="page-title">Publicaciones</h1>
      <hr className="green-rule" />

      <table className="pub-table">
        <tbody>
          {publicaciones.map((pub) => (
            <tr className="pub-row" key={pub.id}>
              <td>
                <Link href={`/publicaciones/${pub.id}`} className="pub-link">
                  {pub.nombre}
                </Link>
              </td>
              <td>{pub.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
