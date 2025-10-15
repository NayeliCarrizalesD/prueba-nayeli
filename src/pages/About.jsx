import './About.css'

function About() {
  return (
    <div className="about">
      <h1>Acerca de esta App</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2>🚀 Tecnologías Utilizadas</h2>
          <ul className="tech-list">
            <li><strong>React 18:</strong> Biblioteca de JavaScript para interfaces de usuario</li>
            <li><strong>JavaScript ES6+:</strong> Sintaxis moderna de JavaScript</li>
            <li><strong>Vite:</strong> Herramienta de construcción rápida</li>
            <li><strong>React Router:</strong> Navegación del lado del cliente</li>
            <li><strong>CSS3:</strong> Estilos modernos y responsive</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>💡 Características</h2>
          <div className="features-list">
            <div className="feature">
              <h3>Componentes Funcionales</h3>
              <p>Utiliza componentes funcionales con React Hooks para un código más limpio y moderno.</p>
            </div>
            <div className="feature">
              <h3>Responsive Design</h3>
              <p>Diseño que se adapta a diferentes tamaños de pantalla para una experiencia óptima en todos los dispositivos.</p>
            </div>
            <div className="feature">
              <h3>Hot Reload</h3>
              <p>Desarrollo rápido con recarga automática de cambios durante el desarrollo.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>👨‍💻 Desarrollo</h2>
          <p>
            Esta aplicación fue creada como ejemplo de una aplicación React moderna usando las mejores prácticas
            de desarrollo frontend. Incluye navegación por rutas, estado local, y una estructura de proyecto organizada.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About