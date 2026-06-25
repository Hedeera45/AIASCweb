"use client";

import { useState } from "react";

interface TimelinePeriod {
  id: string;
  years: string;
  authorities: string[];
}

// Periods reversed: newer dates first, older dates last. Placeholder titles/descriptions removed.
const periodsData: TimelinePeriod[] = [
  {
    id: "12",
    years: "2024-2026",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO",
      "Tesorero: Esteban FANTINO"
    ]
  },
  {
    id: "11",
    years: "2022-2024",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO"
    ]
  },
  {
    id: "10",
    years: "2020-2022",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Tesorero: Esteban FANTINO"
    ]
  },
  {
    id: "9",
    years: "2018-2020",
    authorities: [
      "Presidente: Esteban FANTINO",
      "Secretaria: Laura TAMIOZZO",
      "Vocal: Fabricio BONESSI"
    ]
  },
  {
    id: "8",
    years: "2016-2018",
    authorities: [
      "Presidente: Laura TAMIOZZO",
      "Vocal: Francisco DEMARCHI",
      "Tribuno de ética: Eduardo ASTORGA"
    ]
  },
  {
    id: "7",
    years: "2014-2016",
    authorities: [
      "Presidente: Laura TAMIOZZO",
      "Vice-Presidente: Federico POFFO",
      "Tesorero: Esteban FANTINO"
    ]
  },
  {
    id: "6",
    years: "2012-2014",
    authorities: [
      "Presidente: Esteban FANTINO",
      "Vocal: Alejandra CANALE",
      "Vocal: Sebastián MUÑOZ"
    ]
  },
  {
    id: "5",
    years: "2010-2012",
    authorities: [
      "Presidente: Esteban FANTINO",
      "Secretaria: Laura TAMIOZZO",
      "Revisor de cuentas: Eduardo ZACCHI"
    ]
  },
  {
    id: "4",
    years: "2008-2010",
    authorities: [
      "Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO",
      "Vocal: Ivana QUADRELLI"
    ]
  },
  {
    id: "3",
    years: "2006-2008",
    authorities: [
      "Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO",
      "Tesorero: Esteban FANTINO"
    ]
  },
  {
    id: "2",
    years: "2004-2006",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Tesorero: Esteban FANTINO"
    ]
  },
  {
    id: "1",
    years: "2002-2004",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO"
    ]
  }
];

export default function HistoriaPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null);

  return (
    <>
      <h1 className="page-title">Historia de la AIASC</h1>
      <hr className="green-rule" />

      {/* Timeline Wrapper */}
      <div className="timeline-container">
        {periodsData.map((period) => {
          const isActive = selectedPeriod?.id === period.id;
          return (
            <div 
              key={period.id} 
              className={`timeline-node ${isActive ? "active" : ""}`}
              onClick={() => setSelectedPeriod(isActive ? null : period)}
            >
              <span className="timeline-years">{period.years}</span>
              <button className="timeline-dot" aria-label={`Período ${period.years}`} />
            </div>
          );
        })}
      </div>

      {/* Clean Detail Content (no boxed card) */}
      {selectedPeriod && (
        <div className="timeline-detail-clean">
          <div className="timeline-detail-grid">
            {/* Left section: Authorities */}
            <div className="timeline-detail-left">
              <h3 className="green-subtitle-underlined" style={{ fontSize: "1.8rem", marginTop: 0 }}>
                {selectedPeriod.years}
              </h3>
              <h4 className="timeline-period-subtitle" style={{ marginTop: "16px" }}>Autoridades</h4>
              <ul className="mini-authorities-list">
                {selectedPeriod.authorities.map((auth, idx) => (
                  <li key={idx}>
                    <strong style={{ color: "var(--color-dark-green)" }}>
                      {auth.split(":")[0]}:
                    </strong>
                    {auth.split(":")[1]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right section: Simpsons Dog Photo (placeholder until final photo added) */}
            <div className="timeline-detail-right">
              <div className="timeline-photo-container">
                <img 
                  src="/perro_simpsons.jpg" 
                  alt={`Foto Comisión ${selectedPeriod.years}`} 
                  className="timeline-photo"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
