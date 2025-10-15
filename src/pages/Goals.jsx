import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

function Goals({ userName = "Nayeli Carrizales", onComplete, onLogout }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    currentWeight: '72.0',
    height: '',
    idealWeight: '',
    goal: '',
    minWeight: '',
    maxWeight: ''
  })

  const goals = [
    { id: 'weightLoss', label: 'Pérdida de peso', icon: '⚖️' },
    { id: 'healthyEating', label: 'Alimentación saludable', icon: '🚚' },
    { id: 'muscleGain', label: 'Aumento de masa muscular', icon: '💪' },
    { id: 'diseaseControl', label: 'Control de enfermedades', icon: '🩺' }
  ]

  const progressIndicators = [
    { icon: '📊', status: 'active' },
    { icon: '❤️', status: '' },
    { icon: '🏃‍♀️', status: '' },
    { icon: '⏰', status: '' },
    { icon: '📋', status: '' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGoalSelect = (goalId) => {
    setFormData(prev => ({
      ...prev,
      goal: goalId
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Guardar datos del formulario
    localStorage.setItem('userGoals', JSON.stringify(formData))
    
    // Llamar a onComplete si existe (para actualizar el estado en App.jsx)
    if (onComplete) {
      onComplete()
    }
    
    // Navegar directamente al historial médico
    navigate('/medical-history')
  }

  const handleSaveProgress = () => {
    localStorage.setItem('userGoals', JSON.stringify(formData))
    alert('Progreso guardado correctamente')
  }

  return (
    <div className="goals-container">
      <Navbar onLogout={onLogout} />
      <div className="goals-content">
        <PageHeader userName={userName} indicators={progressIndicators} />

        <form className="goals-form" onSubmit={handleSubmit}>
          <div className="section">
            <h3>📊 Objetivos</h3>
            
            <div className="weight-questions">
              <div className="question-group">
                <div className="question-item">
                  <label>¿Cuál es tu peso ideal?</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      name="currentWeight"
                      value={formData.currentWeight}
                      onChange={handleInputChange}
                      step="0.1"
                    />
                    <span className="unit">kg</span>
                  </div>
                </div>

                <div className="question-item">
                  <label>¿Cuánto mides?</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="0"
                    />
                    <span className="unit">cm</span>
                  </div>
                </div>

                <div className="question-item">
                  <label>¿Cuál es tu peso ideal?</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      name="idealWeight"
                      value={formData.idealWeight}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      step="0.1"
                    />
                    <span className="unit">kg</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="goal-selection">
              <label>¿Qué buscas al mejorar tu alimentación?</label>
              <div className="goals-grid">
                {goals.map(goal => (
                  <div 
                    key={goal.id}
                    className={`goal-card ${formData.goal === goal.id ? 'selected' : ''}`}
                    onClick={() => handleGoalSelect(goal.id)}
                  >
                    <div className="goal-icon">{goal.icon}</div>
                    <span className="goal-label">{goal.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="weight-history">
              <div className="question-item">
                <label>¿Cuál ha sido tu peso mínimo en los últimos 5 años?</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    name="minWeight"
                    value={formData.minWeight}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.1"
                  />
                  <span className="unit">kg</span>
                </div>
              </div>

              <div className="question-item">
                <label>¿Cuál ha sido tu peso máximo en los últimos 5 años?</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    name="maxWeight"
                    value={formData.maxWeight}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    step="0.1"
                  />
                  <span className="unit">kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <div className="save-progress">
              <span>Deseo continuar después,</span>
              <button type="button" onClick={handleSaveProgress} className="save-btn">
                💾 Guardar mi avance
              </button>
            </div>
            
            <button type="submit" className="continue-btn">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Goals