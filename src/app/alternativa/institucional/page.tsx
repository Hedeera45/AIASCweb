import type { Metadata } from "next";
import ExpandableRow from "./ExpandableRow";

export const metadata: Metadata = {
  title: "Información del colegio - AIASC",
  description: "Conozca sobre quiénes somos, nuestras autoridades, preguntas frecuentes y galería.",
};

export default function InstitucionalPage() {
  return (
    <>
      <h1 className="page-title">Información del colegio</h1>
      <hr className="green-rule" />

      <section className="section-block" id="quienes-somos">
        <h2>Quiénes somos</h2>
        <div className="text-block">
          <p style={{ margin: "0 0 12px 0" }}>
            La asociación de ingenieros agrónomos del sur de córdoba, es la <a href="https://www.ciacordoba.org.ar/delegaciones/" target="_blank" rel="noopener noreferrer">delegación</a> del Colegio de ingenieros agrónomos de córdoba, CIAPC, para la zona de río cuarto, tiene su propia cuota y sus actividades, y trabaja en cooperación con el colegio.
          </p>
          <p style={{ margin: 0 }}>
            El CIAPC tiene su propia cuota, y maneja entre otras cosas, la caja jubilatoria y la habilitación para la prescripción de fitosanitarios.
          </p>
        </div>
      </section>

      <section className="section-block" id="preguntas-frecuentes">
        <h2>Preguntas frecuentes</h2>
        <div className="text-block">
          <p style={{ fontStyle: "italic", color: "#666" }}>
            No hay preguntas frecuentes registradas por el momento.
          </p>
        </div>
      </section>

      <section className="section-block" id="autoridades">
        <h2>Autoridades</h2>
        <div className="subheader">Comisión directiva 24 26</div>
        <div className="authorities-grid">
          <div className="authorities-column">
            <h3>Mesa Ejecutiva</h3>
            <div className="authorities-list">
              <div><strong style={{ color: "var(--color-dark-green)" }}>Presidente:</strong> Sandra MAZZONI</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vice-Presidente:</strong> Federico POFFO</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Secretaria:</strong> Laura TAMIOZZO</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Tesorero:</strong> Esteban FANTINO</div>
            </div>
          </div>

          <div className="authorities-column">
            <h3>Vocales</h3>
            <div className="authorities-list">
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Titular 1°:</strong> Ivana QUADRELLI</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Titular 2°:</strong> Alejandra CANALE</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Titular 3°:</strong> Sebastián MUÑOZ</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Titular 4°:</strong> Francisco DEMARCHI</div>
              <div style={{ marginTop: "12px" }}><strong style={{ color: "var(--color-dark-green)" }}>Vocal Suplente 1°:</strong> Fabricio BONESSI</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Suplente 2°:</strong> Fabian DEMASI</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Suplente 3°:</strong> Carlos CASAS</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Vocal Suplente 4°:</strong> Cecilia MARQUEZ</div>
            </div>
          </div>

          <div className="authorities-column">
            <h3>Órganos de Control</h3>
            <div className="authorities-list">
              <div><strong style={{ color: "var(--color-dark-green)" }}>Revisor de cuentas:</strong> Eduardo ZACCHI</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Revisor de cuentas:</strong> Rogelio FANTINO</div>
              <div style={{ marginTop: "16px" }}><strong style={{ color: "var(--color-dark-green)" }}>Tribuno de ética profesional:</strong> Eduardo ASTORGA</div>
              <div><strong style={{ color: "var(--color-dark-green)" }}>Tribuno de ética profesional:</strong> Walter GRUNIG</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="galeria">
        <h2>Galería</h2>
        <div className="text-block">
          <p style={{ fontStyle: "italic", color: "#666" }}>
            Próximamente...
          </p>
        </div>
      </section>
    </>
  );
}
