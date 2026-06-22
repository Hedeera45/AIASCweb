import type { Metadata } from "next";
import ExpandableRow from "./ExpandableRow";

export const metadata: Metadata = {
  title: "Quiénes somos - AIASC",
  description: "Conozca sobre nuestras autoridades y misión.",
};

export default function InstitucionalPage() {
  return (
    <>
      <h1 className="page-title">Quiénes somos</h1>
      <hr className="green-rule" />

      <section className="section-block" id="preguntas-frecuentes">
        <h2>Preguntas frecuentes</h2>
        <ExpandableRow title="La asociación es lo mismo que el colegio?">
          <p style={{ margin: "0 0 12px 0" }}>
            El colegio de ingenieros agrónomos de córdoba, CIAPC, tiene su propia cuota, y maneja entre otras cosas, la caja jubilatoria y la habilitación para la prescripción de fitosanitarios.
          </p>
          <p style={{ margin: 0 }}>
            La asociación de ingenieros agrónomos del sur de córdoba, es la <a href="https://www.ciacordoba.org.ar/delegaciones/" target="_blank" rel="noopener noreferrer">delegación</a> del colegio para la zona de río cuarto, tiene su propia cuota y sus actividades, y trabaja en cooperación con el colegio.
          </p>
        </ExpandableRow>
        <ExpandableRow title="Qué beneficios tengo como asociado?">
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", margin: 0 }}>
            <li>En jornadas y capacitaciones aranceladas</li>
            <li>En alquiler de nuestro salón</li>
            <li>En futuros convenios con distintas empresas</li>
            <li>En la tarjeta para la cena del día del ingeniero agrónomo</li>
            <li>Jornadas a campo</li>
            <li>Ensayos</li>
            <li>Reuniones sociales</li>
            <li>Relaciones interinstitucionales</li>
            <li>Debates grupales</li>
            <li>Cursos, capacitaciones</li>
            <li>Oportunidades laborales a colegas recién recibidos</li>
          </ul>
        </ExpandableRow>
      </section>


      <section className="section-block" id="autoridades">
        <h2>Autoridades</h2>
        <div className="subheader">Comisión directiva 24 26</div>
        <div className="text-block">texto</div>
      </section>

      <section className="section-block" id="nuestra-mision">
        <h2>Nuestra misión</h2>
        <div className="text-block">texto</div>
      </section>
    </>
  );
}
