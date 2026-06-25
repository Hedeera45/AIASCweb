import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesa BPA - AIASC",
  description: "Mesa de Buenas Prácticas Agropecuarias.",
};

export default function MesaBpaPage() {
  return (
    <>
      <h1 className="page-title">Mesa BPA</h1>
      <hr className="green-rule" />

      <section className="section-block">
        <div className="text-block">
          <p style={{ fontStyle: "italic", color: "#666" }}>
            Próximamente...
          </p>
        </div>
      </section>
    </>
  );
}
