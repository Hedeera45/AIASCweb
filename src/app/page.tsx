import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ---- NOVEDADES ---- */}
      <section className="section-block">
        <h2>Novedades</h2>
        <hr className="green-rule" />
        <div className="section-row">Novedad 1</div>
        <div className="section-row">Novedad 2</div>
        <div className="section-row">Novedad 3</div>
        <Link href="/novedades" className="section-more">
          más novedades...
        </Link>
      </section>

      {/* ---- PRÓXIMOS EVENTOS ---- */}
      <section className="section-block">
        <h2>Próximos Eventos</h2>
        <hr className="green-rule" />
        <div className="section-row">Evento 1</div>
        <div className="section-row">Evento 2</div>
        <div className="section-row">Evento 3</div>

        {/* Cursos corrientes */}
        <div className="cursos-header">Cursos corrientes</div>
        <div className="section-row">Curso 1</div>
        <div className="section-row">Curso 2</div>
        <div className="section-row">Curso 3</div>

        <Link href="/eventos" className="section-more">
          más eventos...
        </Link>
      </section>
    </>
  );
}
