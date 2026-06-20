import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - AIASC",
  description: "Servicios ofrecidos por la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export default function ServiciosPage() {
  return (
    <>

      <section className="section-block">
        <h2>Ensayos</h2>

        <h3 className="green-subtitle-underlined">Explicación</h3>
        <div className="text-block">texto</div>

        <br />

        <h3 className="green-subtitle-underlined">Lista de resultados por campaña</h3>
        <div className="text-block">texto</div>
      </section>
    </>
  );
}
