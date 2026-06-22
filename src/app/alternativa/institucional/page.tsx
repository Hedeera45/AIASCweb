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
          text 2
        </ExpandableRow>
      </section>



      <section className="section-block" id="autoridades">
        <h2>Autoridades</h2>
        <div className="subheader">Comisión directiva 24 26</div>
        <div className="text-block">texto</div>
      </section>

      <section className="section-block" id="nuestra-mision">
        <h2>Nuestra misión</h2>
        <div className="text-block">
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>Fomentar el intercambio de experiencias entre agrónomos con o sin actividad</li>
            <li>Servir como plataforma para la canalización de reclamos</li>
            <li>O canalización de actividades en equipo</li>
          </ul>
        </div>
      </section>
    </>
  );
}
