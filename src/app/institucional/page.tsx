import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos - AIASC",
  description: "Conozca sobre nuestra historia, autoridades, misión y servicios.",
};

export default function InstitucionalPage() {
  return (
    <>
      <h1 className="page-title">Quiénes somos</h1>
      <hr className="green-rule" />

      <section className="section-block" id="historia">
        <h2>Historia</h2>
        <div className="text-block">texto</div>
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

      <section className="section-block" id="servicios">
        <h2>Servicios</h2>
        <div className="text-block">texto</div>
      </section>
    </>
  );
}
