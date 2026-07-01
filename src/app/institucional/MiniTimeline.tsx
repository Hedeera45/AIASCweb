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
    id: "7",
    years: "2026-2020",
    authorities: [
      "Presidente: Sandra MAZZONI",
      "Vice-Presidente: Federico POFFO",
      "Secretaria: Laura TAMIOZZO",
      "Tesorero: Esteban FANTINO",
      "Vocal Titular 1°: Ivana QUADRELLI",
      "Vocal Titular 2°: Alejandra CANALE",
      "Vocal Titular 3°: Sebastián MUÑOZ",
      "Vocal Titular 4°: Francisco DEMARCHI",
      "Vocal Suplente 1°: Fabricio BONESSI",
      "Vocal Suplente 2°: Fabian DEMASI",
      "Vocal Suplente 3°: Carlos CASAS",
      "Vocal Suplente 4°: Cecilia MARQUEZ",
      "Revisor de cuentas: Eduardo ZACCHI",
      "Revisor de cuentas: Rogelio FANTINO",
      "Tribuno de ética profesional: Eduardo ASTORGA",
      "Tribuno de ética profesional: Walter GRUNIG",
    ]
  },
  {
    id: "6",
    years: "2020-2017",
    authorities: [
      "Presidente: Ulla Daniel",
      "Vice-Presidente: Demarchi Francisco",
      "Secretario: Primo Carla",
      "Tesorero: Fantino Esteban",
      "Vocal titular 1°: Grunig Walter",
      "Vocal titular 2°: Barbora Marcos",
      "Vocal titular 3°: Zacchi Eduardo",
      "Vocal titular 4°: Engel Heber",
      "Vocal suplente 1°: Mazzoni Sandra",
      "Vocal suplente 2°: Sobre Casas Carlos",
      "Vocal suplente 3°: Martinez Jose",
      "Vocal suplente 4°: Velazquez Joaquin",
      "Revisor de cuentas: Quadrelli Ivana",
      "Revisor de cuentas: Rudi Aldo",
      "Tribuno de ética: Fantino Rogelio",
      "Tribuno de ética: Astorga Eduardo",
      "Tribuno de ética: Demassi Fabian"
    ]
  },
  {
    id: "5",
    years: "2017-2012",
    authorities: [
      "Presidente: Fantino Esteban",
      "Vice-Presidente: Demarchi Francisco",
      "Secretario: Croatto Dario",
      "Tesorero: Demassi Fabian",
      "Vocal titular 1°: Magallanes Torres Sandra",
      "Vocal titular 2°: Poffo Federico",
      "Vocal titular 3°: Bertorello Julian",
      "Vocal titular 4°: Sobre Casas Carlos",
      "Vocal suplente 1°: Sanches Sergio ",
      "Vocal suplente 2°: Quadrelli Ivana",
      "Vocal suplente 3°: Mazzoni Sandra",
      "Vocal suplente 4°: Garcia L",
      "Revisor de cuentas: Zacchi Eduardo",
      "Revisor de cuentas: Marcellino Jose",
      "Tribuno de ética: Fantino Jose",
      "Tribuno de ética: Grunig Walter",
      "Tribuno de ética: Astorga Eduardo"
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
                  src="/perro_simpsons.png"
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
