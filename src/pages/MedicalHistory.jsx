import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/MedicalHistory.css'

function MedicalHistory({ onComplete, onLogout }) {
  const [medicalData, setMedicalData] = useState({
    hasDisease: '',
    diseaseDescription: '',
    hasAllergy: '',
    allergyDescription: '',
    hasSurgery: '',
    surgeryDescription: '',
    surgeryDate: ''
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (field, value) => {
    setMedicalData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleContinue = () => {
    // Guardar datos del historial médico
    localStorage.setItem('medicalHistory', JSON.stringify(medicalData))
    console.log('Historial médico guardado:', medicalData)
    
    // Llamar a la función onComplete para continuar al siguiente paso
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="medical-history">
      <Navbar onLogout={onLogout} />
      <div className="medical-container">
        <div className="medical-header">
          <div className="user-info">
            <div className="user-avatar-icon">
              👤
            </div>
            <div className="user-text">
              <h2>Nutrición</h2>
              <h1>Hola, Nayeli Carrizales</h1>
              <p>Para brindarte una mejor atención, contesta las siguientes preguntas. La información es confidencial y esencial para crear tu perfil y que recibas la mejor atención.</p>
            </div>
          </div>
          
          <div className="progress-indicators">
            <div className="indicator completed">📊</div>
            <div className="indicator active">❤️</div>
            <div className="indicator">🏃‍♀️</div>
            <div className="indicator">🎯</div>
            <div className="indicator">📋</div>
          </div>
        </div>

        <div className="medical-content">
          <div className="section-header">
            <div className="section-icon">❤️</div>
            <h2>Historial médico</h2>
          </div>

          <div className="questions-grid">
            {/* Pregunta 1: Enfermedades */}
            <div className="question-block">
              <h3>¿Padeces alguna enfermedad o afectación médica?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasDisease"
                    value="Si"
                    checked={medicalData.hasDisease === 'Si'}
                    onChange={(e) => handleInputChange('hasDisease', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option selected">
                  <input
                    type="radio"
                    name="hasDisease"
                    value="No"
                    checked={medicalData.hasDisease === 'No'}
                    onChange={(e) => handleInputChange('hasDisease', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
            </div>

            {/* Pregunta 2: Alergias */}
            <div className="question-block">
              <h3>¿Tienes alguna alergia?</h3>
              <div className="radio-group">
                <label className="radio-option selected">
                  <input
                    type="radio"
                    name="hasAllergy"
                    value="Si"
                    checked={medicalData.hasAllergy === 'Si'}
                    onChange={(e) => handleInputChange('hasAllergy', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasAllergy"
                    value="No"
                    checked={medicalData.hasAllergy === 'No'}
                    onChange={(e) => handleInputChange('hasAllergy', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
              {medicalData.hasAllergy === 'Si' && (
                <div className="description-input">
                  <input
                    type="text"
                    placeholder="Fresas, nuez moscada y mariscos."
                    value={medicalData.allergyDescription}
                    onChange={(e) => handleInputChange('allergyDescription', e.target.value)}
                    className="allergy-description"
                  />
                </div>
              )}
            </div>

            {/* Pregunta 3: Cirugías */}
            <div className="question-block">
              <h3>¿Te han hecho alguna cirugía?</h3>
              <div className="radio-group">
                <label className="radio-option selected">
                  <input
                    type="radio"
                    name="hasSurgery"
                    value="Si"
                    checked={medicalData.hasSurgery === 'Si'}
                    onChange={(e) => handleInputChange('hasSurgery', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasSurgery"
                    value="No"
                    checked={medicalData.hasSurgery === 'No'}
                    onChange={(e) => handleInputChange('hasSurgery', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
              {medicalData.hasSurgery === 'Si' && (
                <div className="surgery-details">
                  <div className="description-input">
                    <input
                      type="text"
                      placeholder="Miomectomía"
                      value={medicalData.surgeryDescription}
                      onChange={(e) => handleInputChange('surgeryDescription', e.target.value)}
                      className="surgery-description"
                    />
                  </div>
                  <div className="date-input">
                    <label>Fecha</label>
                    <input
                      type="date"
                      value={medicalData.surgeryDate}
                      onChange={(e) => handleInputChange('surgeryDate', e.target.value)}
                      className="surgery-date"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="action-section">
            <button className="continue-btn" onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalHistory