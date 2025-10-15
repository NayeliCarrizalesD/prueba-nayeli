import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Goals from './pages/Goals'
import Home from './pages/Home'
import Nutrition from './pages/Nutrition'
import About from './pages/About'
import Contact from './pages/Contact'
import MedicalHistory from './pages/MedicalHistory'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasVerifiedData, setHasVerifiedData] = useState(false)
  const [hasCompletedGoals, setHasCompletedGoals] = useState(false)
  const [hasCompletedMedicalHistory, setHasCompletedMedicalHistory] = useState(false)
  const navigate = useNavigate()

  // Verificar si hay una sesión guardada al cargar la app
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    const dataVerified = localStorage.getItem('dataVerified')
    const goalsCompleted = localStorage.getItem('goalsCompleted')
    const medicalHistoryCompleted = localStorage.getItem('medicalHistoryCompleted')
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    
    if (dataVerified === 'true') {
      setHasVerifiedData(true)
    }
    
    if (goalsCompleted === 'true') {
      setHasCompletedGoals(true)
    }
    
    if (medicalHistoryCompleted === 'true') {
      setHasCompletedMedicalHistory(true)
    }
  }, [])

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
    }
  }

  const handleDataVerification = () => {
    setHasVerifiedData(true)
    localStorage.setItem('dataVerified', 'true')
  }

  const handleDataVerificationFromRoute = () => {
    // Navegar directamente a goals usando navigate
    console.log('Navigating to goals from home')
    navigate('/goals')
  }

  const handleGoalsComplete = () => {
    setHasCompletedGoals(true)
    localStorage.setItem('goalsCompleted', 'true')
  }

  const handleMedicalHistoryComplete = () => {
    setHasCompletedMedicalHistory(true)
    localStorage.setItem('medicalHistoryCompleted', 'true')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setHasVerifiedData(false)
    setHasCompletedGoals(false)
    setHasCompletedMedicalHistory(false)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('dataVerified')
    localStorage.removeItem('goalsCompleted')
    localStorage.removeItem('medicalHistoryCompleted')
    localStorage.removeItem('userGoals')
    localStorage.removeItem('medicalHistory')
  }

  // Si no está autenticado, mostrar login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  // Si está autenticado, permitir navegación libre con rutas
  // Solo forzar el flujo inicial si el usuario va directamente a la raíz "/"
  return (
    <div className="App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            // Lógica de flujo solo para la ruta raíz
            !hasVerifiedData ? (
              <Home onDataVerified={handleDataVerification} onLogout={handleLogout} />
            ) : !hasCompletedGoals ? (
              <Goals onComplete={handleGoalsComplete} onLogout={handleLogout} />
            ) : !hasCompletedMedicalHistory ? (
              <MedicalHistory onComplete={handleMedicalHistoryComplete} onLogout={handleLogout} />
            ) : (
              <Nutrition onLogout={handleLogout} />
            )
          } />
          <Route path="/nutrition" element={<Nutrition onLogout={handleLogout} />} />
          <Route path="/home" element={<Home onDataVerified={handleDataVerificationFromRoute} onLogout={handleLogout} />} />
          <Route path="/goals" element={<Goals onComplete={handleGoalsComplete} onLogout={handleLogout} />} />
          <Route path="/medical-history" element={<MedicalHistory onComplete={handleMedicalHistoryComplete} onLogout={handleLogout} />} />
          <Route path="/about" element={<About onLogout={handleLogout} />} />
          <Route path="/contact" element={<Contact onLogout={handleLogout} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App