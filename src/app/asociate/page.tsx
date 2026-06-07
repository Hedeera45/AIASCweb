import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asociate - AIASC",
  description: "Información para asociarse a la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export default function AsociatePage() {
  return (
    <>
      <h1 className="page-title">ASOCIATE</h1>
      <hr className="green-rule" />

      <section className="section-block">
        <p>- Link de inscripción</p>
        <p>- Beneficios</p>
        <p>- Cuota</p>
        <p>- Reuniones</p>
      </section>
    </>
  );
}
