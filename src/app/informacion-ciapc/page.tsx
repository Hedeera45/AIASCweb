import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INFORMACIÓN DEL CIAPC - AIASC",
  description: "Información sobre el Colegio de Ingenieros Agrónomos de la Provincia de Córdoba y la caja previsional.",
};

export default function InformacionCiapcPage() {
  return (
    <>
      <h1 className="page-title">INFORMACIÓN DEL CIAPC</h1>
      <hr className="green-rule" />

      <section className="section-block">
        <h3 className="green-subtitle-underlined">Método de inscripción</h3>
        <div className="text-block">
          Consulte esta página del colegio para conocer el método: <br />
          <a href="https://www.ciacordoba.org.ar/preguntas-frecuentes/" target="_blank" rel="noopener noreferrer">https://www.ciacordoba.org.ar/preguntas-frecuentes/</a>
        </div>
        <br />

        <h3 className="green-subtitle-underlined">Beneficios</h3>
        <div className="text-block">
          - Suscripción a la jubilación de la caja 8470<br />
          - Habilitación para la prescripción de fitosanitarios<br />
          - De acuerdo a la ley 8470,<br />
          &nbsp;&nbsp;<em style={{ fontSize: "0.8em" }}>y por información consultable en esta página, "cómo tramito..."</em>&nbsp;&nbsp;<a href="https://www.caja8470.com.ar/preguntas-frecuentes/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline" }}>&gt;</a>&nbsp;&nbsp;<br />
          - Pueden jubilarse aquellos que tengan 30 años de aporte y más de 65 años.<br />
          - El Haber Promedio Básico es a MAYO 2026: $646.800&nbsp;&nbsp;<a href="https://www.caja8470.com.ar/nuevo-aumento-haber-jubilatorio-mayo-2026/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline" }}>&gt;</a><br />
          &nbsp;&nbsp;<em style={{ fontSize: "0.8em" }}>consultar las noticias de la página de la caja</em><br />
          - Pueden corresponder jubilaciones mayores, en una escala continua de aumento de acuerdo a un exceso de aportes realizados por sobre la cuota básica
        </div>
        <br />

        <h3 className="green-subtitle-underlined">Cuota</h3>
        <div className="text-block">
          - El valor de la cuota es sólo el aporte a la caja previsional<br />
          - Éste se fundamenta en la ley 8470, es una caja que comparten arquitectos y agrónomos<br />
          - Establece dos pagos: un aporte mínimo anual básico, y un monto por contrato<br />
          - El aporte mínimo anual básico&nbsp;&nbsp;<a href="https://www.caja8470.com.ar/pagos-aportes-minimos/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline" }}>&gt;</a>&nbsp;&nbsp;, cambia de valor dependiendo de la edad del aportante, y si está en relación de dependencia o no (en cuyo caso se calcula, del normal, el 33%).<br />
          - Aporte mínimo anual básico a <strong>MAYO 2026</strong>:<br />
          <br />
          <div><table style={{ width: "100%" }}><tbody><tr><td style={{ width: "25%" }}><strong>Edades</strong></td><td style={{ width: "25%" }}><strong>%</strong></td><td style={{ width: "25%" }}><strong>Cuota anual</strong></td><td style={{ width: "25%" }}><strong>Cuota mensual</strong></td></tr><tr><td>Hasta 30 años (inclusive)</td><td>50</td><td>$420.699,00.-</td><td>$35.058,25.-</td></tr><tr><td>De 31 a 40 años (inclusive)</td><td>100</td><td>$841.397,76.-</td><td>$70.116,48.-</td></tr><tr><td>De 41 a 55 años (inclusive)</td><td>120</td><td>$1.009.677,36.-</td><td>$84.139,78.-</td></tr><tr><td>De 56 o más años</td><td>140</td><td>$1.177.956,84.-</td><td>$98.163,07.-</td></tr></tbody></table></div>
          <br />
          - El monto por contrato es del 18%, 9% lo paga el trabajador y 9% el contratador&nbsp;&nbsp;<a href="https://www.caja8470.com.ar/institucional-la-caja/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", textDecoration: "underline" }}>&gt;</a>&nbsp;&nbsp;
        </div>
      </section>
    </>
  );
}
