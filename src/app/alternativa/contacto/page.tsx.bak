"use client";

import { useState, type FormEvent } from "react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to a backend/API
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <>
      <h1 className="page-title">Contacto</h1>
      <hr className="green-rule" />

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
