import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - AIASC",
  description: "Servicios ofrecidos por la Asociación de Ingenieros Agrónomos del Sur de Córdoba.",
};

export default function ServiciosPage() {
  return (
    <>

      <section className="section-block">
        <h2>Ensayos a Campo AIASC</h2>

        <div className="text-block">
          Desde hace varios años, en AIASC desarrollamos ensayos comparativos y demostrativos en nuestro campo experimental con el objetivo de generar información técnica confiable y adaptada a las condiciones productivas del sur de Córdoba.
        </div>

        <div className="text-block">
          Trabajamos junto a empresas semilleras, proveedoras de fertilizantes y tecnologías para evaluar el comportamiento de distintos materiales y estrategias de manejo en ambientes representativos de nuestra zona de influencia.
        </div>

        <h3 className="green-subtitle-underlined">¿Qué hacemos?</h3>

        <h3 className="green-subtitle" style={{ marginBottom: "6px" }}>Ensayos comparativos de híbridos de maíz</h3>
        <div className="text-block">
          Evaluamos el potencial productivo, la adaptación, la sanidad y la estabilidad de diferentes híbridos mediante protocolos de trabajo estandarizados que permiten generar resultados objetivos y comparables.
        </div>

        <h3 className="green-subtitle" style={{ marginBottom: "6px" }}>Ensayos de fertilización y manejo</h3>
        <div className="text-block">
          Analizamos distintas estrategias de nutrición y manejo agronómico con el fin de aportar información útil para la toma de decisiones de productores y asesores.
        </div>

        <h3 className="green-subtitle-underlined">Nuestro objetivo</h3>
        <ul style={{ paddingLeft: "15px", display: "flex", flexDirection: "column", gap: "8px", margin: "0 0 18px 0", listStyleType: "none" }}>
          <li>- Los resultados obtenidos permiten conocer el desempeño de materiales y tecnologías bajo las condiciones reales de producción de nuestra región.</li>
          <li>- Aportar un espacio de vinculación entre empresas y profesionales.</li>
        </ul>

        <h3 className="green-subtitle-underlined">Los ensayos forman parte de una propuesta integral que incluye:</h3>
        <ul style={{ paddingLeft: "15px", display: "flex", flexDirection: "column", gap: "8px", margin: "0 0 18px 0", listStyleType: "none" }}>
          <li>- Jornadas a campo para la presentación de materiales y tecnologías.</li>
          <li>- Visitas técnicas durante el desarrollo de los cultivos.</li>
          <li>- Difusión de las empresas participantes a través de los canales de comunicación de AIASC.</li>
          <li>- Elaboración y entrega de informes técnicos con los resultados obtenidos.</li>
        </ul>

        <h3 className="green-subtitle-underlined">Beneficios para las empresas</h3>
        <ul style={{ paddingLeft: "15px", display: "flex", flexDirection: "column", gap: "8px", margin: "0 0 12px 0", listStyleType: "none" }}>
          <li>- Posicionamiento de productos y tecnologías en una red de profesionales referentes de la región.</li>
          <li>- Generación de información técnica objetiva y local.</li>
          <li>- Participación en jornadas y actividades de capacitación.</li>
          <li>- Vinculación directa con ingenieros agrónomos, asesores y productores.</li>
        </ul>

        <div style={{
          backgroundColor: "var(--color-cursos-bg)",
          padding: "6px 0px",
          borderRadius: "4px",
          marginTop: "0px",
          color: "black",
          fontWeight: "400",
          fontStyle: "italic"
        }} className="text-block">
          En AIASC creemos que la generación de conocimiento en conjunto es fundamental para impulsar una agricultura más eficiente, sustentable y basada en información de calidad.
        </div>

        <br />

        <h3 className="green-subtitle-underlined">Lista de resultados por campaña</h3>
        <div className="text-block">texto</div>
      </section>

      <section className="section-block">
        <h2>Reuniones</h2>
        <div className="text-block">Todos los lunes, de 19.30 a 22, en Alberdi 1354</div>
      </section>
    </>
  );
}
