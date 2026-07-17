import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <p style={{
        color: 'var(--color-green)',
        fontStyle: 'italic',
        fontWeight: 650,
        textAlign: 'left',
        marginBottom: '0.9rem',
        marginTop: '-1.1rem',
        marginLeft: '1.7rem',
        fontSize: '1.7rem'
      }}>
        ~ Esta página está en construcción ~
      </p>

      {/* ---- NOVEDADES ---- */}
      <section className="section-block">
        <h2>No<Link href="/alternativa" style={{ textDecoration: "none", color: "inherit" }}>v</Link>edades</h2>
        <hr className="green-rule" />
        <Link href="/novedades" className="section-more">
          más novedades...
        </Link>
      </section>

      {/* ---- PRÓXIMOS EVENTOS ---- */}
      <section className="section-block">
        <h2>Próximos Eventos</h2>
        <hr className="green-rule" />

        <div className="section-row" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: 'var(--color-dark-green)' }}>
              Mesa BPA - Calidad del suelo
            </h3>
            <span>Fecha: 31/Jul</span> &nbsp;|&nbsp; <span>Precio: $ 100.000</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <img src="/BPA 1.jpg" alt="Flyer BPA" style={{ width: 'calc(50% - 0.5rem)', maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
            <img src="/BPA 2.jpg" alt="Cronograma BPA" style={{ width: 'calc(50% - 0.5rem)', maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </div>
        </div>

        <Link href="/eventos" className="section-more">
          más eventos...
        </Link>
      </section>
    </>
  );
}
