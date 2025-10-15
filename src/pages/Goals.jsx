import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Goals.css'

function Goals({ onComplete, onLogout }) {
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
    onComplete()
  }

  const handleSaveProgress = () => {
    localStorage.setItem('userGoals', JSON.stringify(formData))
    alert('Progreso guardado correctamente')
  }

  return (
    <div className="goals-container">
      <Navbar onLogout={onLogout} />
      <div className="goals-content">
        <div className="goals-header">
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
            <div className="indicator active">📊</div>
            <div className="indicator">❤️</div>
            <div className="indicator">🏃‍♀️</div>
            <div className="indicator">⏰</div>
            <div className="indicator">📋</div>
          </div>
        </div>

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