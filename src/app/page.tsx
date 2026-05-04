export default function Home() {
  return (
    <div className="container">
      <header className="header-grid">
        <div className="logo-area">AIASC LOGO</div>
        <div className="cover-area">Imagen de portada</div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Iniciar sesión</a></li>
            <li><a href="#">Registrarse</a></li>
            <li><a href="#">Buscar</a></li>
            <li><a href="#">Actual</a></li>
            <li><a href="#">Archivos</a></li>
            <li><a href="#">Normas de publicación</a></li>
            <li><a href="#">&gt;&gt; Enviar su Trabajo</a></li>
          </ul>
        </nav>
      </header>

      <div className="content-layout">
        <main className="main-col">
          <h1>Título</h1>
          <div className="text-line">Texto</div>
          <div className="text-line">Texto texto texto texto texto</div>
          <div className="text-line">Texto texto texto texto texto</div>
          <div className="text-line">Texto texto texto texto texto</div>
          <div className="text-line">Texto texto texto textoTexto texto texto texto texto</div>
          <div className="text-line">Texto texto texto texto texto</div>
          <div className="text-line">Texto texto texto texto texto</div>
          <div className="text-line">Texto texto texto texto texto</div>

          <div className="palette-row">
            <div className="swatch" style={{ background: 'var(--color-teal)' }}></div>
            <div className="swatch" style={{ background: 'var(--color-green)' }}></div>
            <div className="swatch" style={{ background: 'var(--color-dark-green)' }}></div>
            <div className="swatch" style={{ background: 'var(--color-light-blue)' }}></div>
            <div className="swatch" style={{ background: 'var(--color-very-light-blue)' }}></div>
          </div>
        </main>

        <aside className="sidebar-col">
          <div className="image-container">Imágenes</div>
          <div className="other-text-container">otro texto</div>
        </aside>
      </div>
    </div>
  );
}
