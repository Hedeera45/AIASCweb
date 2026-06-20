"use client";

import { useState, type FormEvent } from "react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mapaCargado, setMapaCargado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/aiascriocuarto@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nombre: nombre,
            Email: email,
            Mensaje: mensaje
        })
      });

      if (response.ok) {
        alert("Mensaje enviado");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        alert("Hubo un error al enviar el mensaje. Por favor intente nuevamente.");
      }
    } catch (error) {
      alert("Hubo un error de conexión. Por favor intente nuevamente.");
    }
  }

  return (
    <>
      <h1 className="page-title">Contacto</h1>
      <hr className="green-rule" />

      {/* Side-by-side Row for Address and Map */}
      <div className="contact-details-row">
        {/* Address & Phone Details */}
        <div className="contact-info">
          <div>Alberdi 1354 - Rio IV, Cba</div>
          <div>351 7 553 101</div>
        </div>

        {/* Integrated OpenStreetMap */}
        <div className="map-container" style={{ position: "relative" }}>
          {!mapaCargado ? (
            <div 
              style={{
                width: "100%",
                height: "350px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => setMapaCargado(true)}
            >
              <img 
                src="/mapa-placeholder.png" 
                alt="Mapa de ubicación" 
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(4px)",
                  zIndex: 1
                }}
              />
              <button
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "12px 24px",
                  background: "var(--color-header-bg)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "var(--font-main)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
                }}
              >
                Ver mapa
              </button>
            </div>
          ) : (
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-64.352514%2C-33.134849%2C-64.342514%2C-33.126849&amp;layer=mapnik&amp;marker=-33.130849%2C-64.347514"
              title="Ubicación de la Asociación"
            ></iframe>
          )}
        </div>
      </div>

      {/* Section Title for Form */}
      <h2 className="form-subtitle">Deje un mensaje:</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Su nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Correo electrónico</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">Mensaje</label>
          <textarea
            id="contact-message"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escriba su mensaje aquí..."
            required
          />
        </div>

        <button type="submit" className="form-submit">
          Enviar mensaje
        </button>
      </form>
    </>
  );
}
