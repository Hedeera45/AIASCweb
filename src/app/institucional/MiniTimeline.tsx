"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface MiniPeriod {
  id: string;
  years: string;
  authorities: string[];
}

const miniPeriodsData: MiniPeriod[] = [
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
  }
];

export default function MiniTimeline() {
  const [selectedPeriod, setSelectedPeriod] = useState<MiniPeriod | null>(null);
  const router = useRouter();

  return (
    <div className="mini-timeline-wrapper">
      {/* Interactive Mini Timeline Track (Single Row) */}
      <div className="mini-timeline-container">
        {miniPeriodsData.map((period) => {
          const isActive = selectedPeriod?.id === period.id;
          return (
            <div 
              key={period.id} 
              className={`mini-timeline-node ${isActive ? "active" : ""}`}
              onClick={() => setSelectedPeriod(isActive ? null : period)}
            >
              <span className="mini-timeline-years">{period.years}</span>
              <button className="mini-timeline-dot" aria-label={`Período ${period.years}`} />
            </div>
          );
        })}
        
        {/* Three separate dots trailing off, leading to the full Historia page on click */}
        <div 
          className="mini-timeline-ellipsis"
          onClick={() => router.push("/historia")}
          aria-label="Ver más historia"
        >
          <span className="ellipsis-dot"></span>
          <span className="ellipsis-dot"></span>
          <span className="ellipsis-dot"></span>
        </div>
      </div>

      {/* Dynamic Drawer (pushes the content below it when opened) */}
      {selectedPeriod && (
        <div className="mini-timeline-detail-drawer">
          <h3 className="green-subtitle-underlined" style={{ fontSize: "1.6rem", margin: "20px 0 12px 0" }}>
            Comisión {selectedPeriod.years}
          </h3>
          
          <div className="mini-timeline-detail-content">
            {/* Left Column: Authorities */}
            <div className="mini-timeline-left">
              <h4 className="timeline-period-subtitle" style={{ fontSize: "1.15rem", marginBottom: "14px" }}>
                Autoridades
              </h4>
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

            {/* Right Column: Actual Photo of the Commission */}
            <div className="mini-timeline-right">
              <div className="mini-photo-container">
                <img 
                  src="/perro_simpsons.jpg" 
                  alt={`Foto Comisión ${selectedPeriod.years}`} 
                  className="mini-timeline-photo"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
