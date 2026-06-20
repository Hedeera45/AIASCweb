import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ---- NOVEDADES ---- */}
      <section className="section-block">
        <h2>No<Link href="/vieja" style={{ textDecoration: "none", color: "inherit" }}>v</Link>edades</h2>
        <hr className="green-rule" />

        <Link href="/novedades" className="section-more">
          más novedades...
        </Link>
      </section>

      {/* ---- PRÓXIMOS EVENTOS ---- */}
      <section className="section-block">
        <h2>Próximos Eventos</h2>
        <hr className="green-rule" />


        <Link href="/eventos" className="section-more">
          más eventos...
        </Link>
      </section>
    </>
  );
}
