import { useState } from 'react'
import './Home.css'

function Home() {
  const [userData] = useState({
    name: "Nayeli Carrizales",
    age: "22 años",
    email: "nayeli.carrizales@gmail.com",
    phone: "01 55 5530 6750",
    workplace: "Desarrolladora Frontend React"
  })

  return (
    <div className="home">
      <div className="profile-container">
        <div className="welcome-section">
          <div className="avatar">
            <img 
              src="https://via.placeholder.com/80x80/FFD61B/333333?text=N" 
              alt="Profile Avatar" 
              className="avatar-img"
            />
          </div>
          <div className="welcome-text">
            <h2>¡Bienvenida</h2>
            <h1>{userData.name}!</h1>
          </div>
        </div>

        <div className="verification-section">
          <p className="verification-text">
            Para comenzar, ayúdanos a verificar tus datos.
          </p>
        </div>

        <div className="user-data">
          <div className="data-row">
            <div className="data-item">
              <span className="data-icon">👤</span>
              <div className="data-content">
                <span className="data-label">Nombre</span>
                <span className="data-value">{userData.name}</span>
              </div>
            </div>
            <div className="data-item">
              <span className="data-icon">🎂</span>
              <div className="data-content">
                <span className="data-label">Edad</span>
                <span className="data-value">{userData.age}</span>
              </div>
            </div>
          </div>

          <div className="data-row">
            <div className="data-item">
              <span className="data-icon">📧</span>
              <div className="data-content">
                <span className="data-label">Correo electrónico</span>
                <span className="data-value">{userData.email}</span>
              </div>
            </div>
            <div className="data-item">
              <span className="data-icon">📱</span>
              <div className="data-content">
                <span className="data-label">Teléfono celular</span>
                <span className="data-value">{userData.phone}</span>
              </div>
            </div>
          </div>

          <div className="data-row">
            <div className="data-item full-width">
              <span className="data-icon">💼</span>
              <div className="data-content">
                <span className="data-label">Lugar de trabajo</span>
                <span className="data-value highlighted">{userData.workplace}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-section">
          <button className="continue-btn">
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home