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
    surgeryDate: '',
    // Historial familiar
    familyHistory: [],
    // Preguntas adicionales
    hasDiet: '',
    hasMedication: '',
    hasReductiveTreatment: '',
    treatmentDuration: '',
    hasSupplements: '',
    supplementsDescription: '',
    hasMedicalStudies: '',
    studiesDescription: ''
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (field, value) => {
    setMedicalData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addFamilyHistory = () => {
    setMedicalData(prev => ({
      ...prev,
      familyHistory: [...prev.familyHistory, { relationship: '', condition: '' }]
    }))
  }

  const updateFamilyHistory = (index, field, value) => {
    setMedicalData(prev => ({
      ...prev,
      familyHistory: prev.familyHistory.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeFamilyHistory = (index) => {
    setMedicalData(prev => ({
      ...prev,
      familyHistory: prev.familyHistory.filter((_, i) => i !== index)
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

            {/* Pregunta 4: Historial Familiar */}
            <div className="question-block full-width">
              <h3>¿Algún familiar directo ha sufrido alguna afección médica como enfermedades del corazón, cáncer, diabetes u otro padecimiento crónico?</h3>
              <div className="family-history-section">
                {medicalData.familyHistory.map((item, index) => (
                  <div key={index} className="family-history-item">
                    <select
                      value={item.relationship}
                      onChange={(e) => updateFamilyHistory(index, 'relationship', e.target.value)}
                      className="relationship-select"
                    >
                      <option value="">Seleccionar parentesco</option>
                      <option value="Abuelo Materno">Abuelo Materno</option>
                      <option value="Abuela Materna">Abuela Materna</option>
                      <option value="Abuelo Paterno">Abuelo Paterno</option>
                      <option value="Abuela Paterna">Abuela Paterna</option>
                      <option value="Padre">Padre</option>
                      <option value="Madre">Madre</option>
                      <option value="Hermano">Hermano</option>
                      <option value="Hermana">Hermana</option>
                      <option value="Hijo">Hijo</option>
                      <option value="Hija">Hija</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Ej: Diabetes, Hipertensión..."
                      value={item.condition}
                      onChange={(e) => updateFamilyHistory(index, 'condition', e.target.value)}
                      className="condition-input"
                    />
                    <button 
                      type="button" 
                      onClick={() => removeFamilyHistory(index)}
                      className="remove-btn"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={addFamilyHistory}
                  className="add-family-btn"
                >
                  ➕ Agregar otro familiar
                </button>
              </div>
            </div>

            {/* Pregunta 5: Dietas */}
            <div className="question-block">
              <h3>¿Has hecho dieta para bajar de peso?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasDiet"
                    value="Si"
                    checked={medicalData.hasDiet === 'Si'}
                    onChange={(e) => handleInputChange('hasDiet', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasDiet"
                    value="No"
                    checked={medicalData.hasDiet === 'No'}
                    onChange={(e) => handleInputChange('hasDiet', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
            </div>

            {/* Pregunta 6: Medicamentos */}
            <div className="question-block">
              <h3>¿Has tomado medicamentos para bajar de peso?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasMedication"
                    value="Si"
                    checked={medicalData.hasMedication === 'Si'}
                    onChange={(e) => handleInputChange('hasMedication', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasMedication"
                    value="No"
                    checked={medicalData.hasMedication === 'No'}
                    onChange={(e) => handleInputChange('hasMedication', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
            </div>

            {/* Pregunta 7: Tratamientos Reductivos */}
            <div className="question-block">
              <h3>¿Has tomado tratamientos reductivos anteriormente?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasReductiveTreatment"
                    value="Si"
                    checked={medicalData.hasReductiveTreatment === 'Si'}
                    onChange={(e) => handleInputChange('hasReductiveTreatment', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasReductiveTreatment"
                    value="No"
                    checked={medicalData.hasReductiveTreatment === 'No'}
                    onChange={(e) => handleInputChange('hasReductiveTreatment', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
              {medicalData.hasReductiveTreatment === 'Si' && (
                <div className="treatment-details">
                  <div className="time-options">
                    <label className="time-option">
                      <input
                        type="radio"
                        name="treatmentDuration"
                        value="Cavitación"
                        checked={medicalData.treatmentDuration === 'Cavitación'}
                        onChange={(e) => handleInputChange('treatmentDuration', e.target.value)}
                      />
                      <span>ej. Cavitación</span>
                    </label>
                    <label className="time-option">
                      <input
                        type="radio"
                        name="treatmentDuration"
                        value="6 meses"
                        checked={medicalData.treatmentDuration === '6 meses'}
                        onChange={(e) => handleInputChange('treatmentDuration', e.target.value)}
                      />
                      <span>ej. 6 meses</span>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Pregunta 8: Suplementos */}
            <div className="question-block">
              <h3>¿Utilizas algún suplemento o tomas vitaminas de manera regular?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasSupplements"
                    value="Si"
                    checked={medicalData.hasSupplements === 'Si'}
                    onChange={(e) => handleInputChange('hasSupplements', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasSupplements"
                    value="No"
                    checked={medicalData.hasSupplements === 'No'}
                    onChange={(e) => handleInputChange('hasSupplements', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
              {medicalData.hasSupplements === 'Si' && (
                <div className="description-input">
                  <input
                    type="text"
                    placeholder="ej. Vitamina B, Proteínas"
                    value={medicalData.supplementsDescription}
                    onChange={(e) => handleInputChange('supplementsDescription', e.target.value)}
                    className="supplements-description"
                  />
                  <small>¿Cuál?</small>
                </div>
              )}
            </div>

            {/* Pregunta 9: Estudios Médicos */}
            <div className="question-block">
              <h3>¿Te has realizado estudios médicos recientes?</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasMedicalStudies"
                    value="Si"
                    checked={medicalData.hasMedicalStudies === 'Si'}
                    onChange={(e) => handleInputChange('hasMedicalStudies', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  Sí
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="hasMedicalStudies"
                    value="No"
                    checked={medicalData.hasMedicalStudies === 'No'}
                    onChange={(e) => handleInputChange('hasMedicalStudies', e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  No
                </label>
              </div>
              {medicalData.hasMedicalStudies === 'Si' && (
                <div className="description-input">
                  <input
                    type="text"
                    placeholder="ej. Química Sanguínea, Hemoglobina, etc."
                    value={medicalData.studiesDescription}
                    onChange={(e) => handleInputChange('studiesDescription', e.target.value)}
                    className="studies-description"
                  />
                  <small>¿Qué tipo de estudio médico?</small>
                  <div className="file-upload-section">
                    <button type="button" className="upload-btn">
                      📎 Adjuntar archivo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="save-section">
            <p>Deseo continuar después.</p>
            <button type="button" className="save-btn">
              💾 Guardar mi avance
            </button>
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