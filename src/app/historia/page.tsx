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
      "Vocal suplente 1°: Sanchez Sergio ", 
      "Vocal suplente 2°: Quadrelli Ivana", 
      "Vocal suplente 3°: Mazzoni Sandra", 
      "Vocal suplente 4°: Garcia L", 
      "Revisor de cuentas: Zacchi Eduardo", 
      "Revisor de cuentas: Marcellino Jose", 
      "Tribuno de ética: Fantino Jose", 
      "Tribuno de ética: Grunig Walter", 
      "Tribuno de ética: Astorga Eduardo" 
    ] 
  }, 
  { 
    id: "4", 
    years: "2012-2009", 
    authorities: [ 
      "Presidente: Demarchi Francisco", 
      "Vice-Presidente: Demasi Fabian", 
      "Secretario: Magallanes Torres Sandra", 
      "Tesorero: Zacchi Eduardo", 
      "Vocal titular 1°: Quadrelli Ivana", 
      "Vocal titular 2°: Mazzoni Sandra", 
      "Vocal titular 3°: Poffo Federico", 
      "Vocal titular 4°: Aiassa Natalia", 
      "Vocal suplente 1°: Giacomelli Gaston", 
      "Vocal suplente 2°: Sanchez Sergio", 
      "Vocal suplente 3°: Kaehr Jean Paul", 
      "Vocal suplente 4°: Krabbe Carlos", 
      "Revisor de cuentas: Ochoa Claudio", 
      "Revisor de cuentas: Marcellino Jose", 
      "Tribuno de ética: Fantino Rogelio", 
      "Tribuno de ética: Grunig Walter", 
      "Tribuno de ética: Astorga Eduardo" 
    ] 
  }, 

  { 
    id: "3", 
    years: "2009-2007", 
    authorities: [ 
      "Presidente: Demarchi Francisco", 
      "Vice-Presidente: Taborda Osvaldo", 
      "Secretario: Magallanes Torres Sandra", 
      "Tesorero: Mazzoni Sandra", 
      "Vocal titular 1°: Demasi Fabian", 
      "Vocal titular 2°: Aiassa Natalia", 
      "Vocal titular 3°: Quadrelli Ivana", 
      "Vocal titular 4°: Moltrasio Roxana", 
      "Vocal suplente 1°: Krabbe Carlos", 
      "Vocal suplente 2°: Roggeri Mario", 
      "Vocal suplente 3°: Tobaldo Gustavo", 
      "Vocal suplente 4°: Bertorello Julian", 
      "Revisor de cuentas: Zacchi Eduardo", 
      "Revisor de cuentas: Ochoa Claudio", 
      "Tribuno de ética: Fantino Rogelio", 
      "Tribuno de ética: Grunig Walter", 
      "Tribuno de ética: Astorga Eduardo" 
    ] 
  }, 
  { 
    id: "2", 
    years: "2007-2005", 
    authorities: [ 
      "Presidente: Agote Luis Guillermo", 
      "Vice-Presidente: Demasi Fabian", 
      "Secretario: Magallanes Torres Sandra", 
      "Tesorero: Acquarone Silvio", 
      "Vocal titular 1°: Grunig Walter", 
      "Vocal titular 2°: Mazzoni Sandra", 
      "Vocal titular 3°: Quadrelli Ivana", 
      "Vocal titular 4°: Villar Mauricio", 
      "Vocal suplente 1°: Taborda Osvaldo", 
      "Vocal suplente 2°: Demarchi Francisco", 
      "Vocal suplente 3°: Bonelli Marcos", 
      "Vocal suplente 4°: Aiassa Natalia", 
      "Revisor de cuentas: Zacchi Eduardo", 
      "Revisor de cuentas: Robledo Luciana", 
      "Tribuno de ética: Ochoa Claudio", 
      "Tribuno de ética: Montesano Alberto", 
      "Tribuno de ética: Fantino Rogelio" 
    ] 
  },

  { 
    id: "1", 
    years: "2005-2002", 
    authorities: [ 
      "Presidente: Grunig Walter", 
      "Vice-Presidente: Mazzoni Sandra", 
      "Secretario: Magallanes Torres Sandra", 
      "Tesorero: Agote Luis", 
      "Vocal titular 1°: Acquarone Silvio", 
      "Vocal titular 2°: Montesano Alberto", 
      "Vocal titular 3°: Demasi Fabian", 
      "Vocal titular 4°: Kearney Marcelo", 
      "Vocal suplente 1°: Zacchi Eduardo", 
      "Vocal suplente 2°: Quadrelli Ivana", 
      "Vocal suplente 3°: Bonessi Fabricio", 
      "Vocal suplente 4°: Ochoa Claudio", 
      "Revisor de cuentas: Cafaro antonio", 
      "Revisor de cuentas: Rosa Maria Jose", 
      "Tribuno de ética: Marcellino Jose", 
      "Tribuno de ética: Astorga Eduardo", 
      "Tribuno de ética: Fantino Rogelio" 
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
                  src="/perro_simpsons.png" 
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
