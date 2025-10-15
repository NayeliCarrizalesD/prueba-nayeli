import { useState } from 'react'
import { FaUser, FaBirthdayCake, FaEnvelope, FaPhone, FaBriefcase, FaEdit, FaSave, FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar'
import './Home.css'

function Home({ onDataVerified, onLogout }) {
  const [userData, setUserData] = useState({
    name: "Nayeli Carrizales",
    age: "22 años",
    email: "nayeli.carrizales@gmail.com",
    phone: "01 55 5530 6750",
    workplace: "Desarrolladora Frontend React"
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setIsEditing(false)
    console.log('Datos guardados:', userData)
    
    Swal.fire({
      title: '¡Datos guardados!',
      text: 'Tu información ha sido actualizada correctamente.',
      icon: 'success',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#FFD61B',
      timer: 3000,
      timerProgressBar: true
    })
  }

  const handleContinue = () => {
    // Verificar datos y avanzar al siguiente paso (Goals)
    console.log('handleContinue called')
    onDataVerified()
  }

  return (
    <div className="home">
      <Navbar onLogout={onLogout} />
      <div className="profile-container">
        <div className="welcome-section">
          <div className="avatar">
            <div className="avatar-icon">
              👤
            </div>
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
          <div className="edit-actions">
            {!isEditing ? (
              <button className="edit-btn" onClick={handleEditToggle}>
                ✏️ Editar datos
              </button>
            ) : (
              <div className="edit-controls">
                <button className="save-btn" onClick={handleSave}>
                  ✅ Guardar
                </button>
                <button className="cancel-btn" onClick={handleEditToggle}>
                  ❌ Cancelar
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="user-data">
          <div className="data-row">
            <div className="data-item">
              <span className="data-icon">👤</span>
              <div className="data-content">
                <span className="data-label">Nombre</span>
                {isEditing ? (
                  <input
                    type="text"
                    className="data-input"
                    value={userData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                ) : (
                  <span className="data-value">{userData.name}</span>
                )}
              </div>
            </div>
            <div className="data-item">
              <span className="data-icon">🎂</span>
              <div className="data-content">
                <span className="data-label">Edad</span>
                {isEditing ? (
                  <input
                    type="text"
                    className="data-input"
                    value={userData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                ) : (
                  <span className="data-value">{userData.age}</span>
                )}
              </div>
            </div>
          </div>

          <div className="data-row">
            <div className="data-item">
              <span className="data-icon">📧</span>
              <div className="data-content">
                <span className="data-label">Correo electrónico</span>
                {isEditing ? (
                  <input
                    type="email"
                    className="data-input"
                    value={userData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <span className="data-value">{userData.email}</span>
                )}
              </div>
            </div>
            <div className="data-item">
              <span className="data-icon">📱</span>
              <div className="data-content">
                <span className="data-label">Teléfono celular</span>
                {isEditing ? (
                  <input
                    type="tel"
                    className="data-input"
                    value={userData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                ) : (
                  <span className="data-value">{userData.phone}</span>
                )}
              </div>
            </div>
          </div>

          <div className="data-row">
            <div className="data-item full-width">
              <span className="data-icon">💼</span>
              <div className="data-content">
                <span className="data-label">Lugar de trabajo</span>
                {isEditing ? (
                  <input
                    type="text"
                    className="data-input"
                    value={userData.workplace}
                    onChange={(e) => handleInputChange('workplace', e.target.value)}
                  />
                ) : (
                  <span className="data-value highlighted">{userData.workplace}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="action-section">
          <button className="continue-btn" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home