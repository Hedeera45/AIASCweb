import Link from "next/link";

const publicaciones = [
  { id: "1", nombre: "Informe Técnico Nº 45 - Manejo de suelos", fecha: "28/04/2026" },
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
                <Link href={`/alternativa/publicaciones/${pub.id}`} className="pub-link">
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
