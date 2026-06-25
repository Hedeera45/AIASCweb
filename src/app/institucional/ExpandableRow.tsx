"use client";
import { useState } from "react";

export default function ExpandableRow({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative", marginBottom: "16px", marginLeft: 0, marginRight: 0 }}>
      {/* Plus/Minus Sign hanging in the left margin */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "absolute",
          left: "-17px",
          top: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          color: "var(--color-text)",
          fontWeight: "bold",
          padding: 0,
          lineHeight: 1,
        }}
      >
        {isOpen ? "-" : "+"}
      </button>

      {/* The White Box */}
      <div style={{ border: "1px solid #ddd", borderRadius: "4px", overflow: "hidden" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "block",
            width: "100%",
            background: "var(--color-white)",
            border: "none",
            padding: "12px 15px",
            cursor: "pointer",
            fontSize: "1.05rem",
            color: "var(--color-text)",
            textAlign: "left",
            fontWeight: 500,
          }}
        >
          {title}
        </button>

        {isOpen && (
          <div style={{
            padding: "12px 15px",
            fontSize: "1rem",
            lineHeight: 1.6,
            background: "var(--color-white)",
            borderTop: "1px solid #ddd"
          }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
