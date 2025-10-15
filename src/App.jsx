import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Goals from './components/Goals'
import Home from './pages/Home'
import Nutrition from './pages/Nutrition'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasVerifiedData, setHasVerifiedData] = useState(false)
  const [hasCompletedGoals, setHasCompletedGoals] = useState(false)

  // Verificar si hay una sesión guardada al cargar la app
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    const dataVerified = localStorage.getItem('dataVerified')
    const goalsCompleted = localStorage.getItem('goalsCompleted')
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    
    if (dataVerified === 'true') {
      setHasVerifiedData(true)
    }
    
    if (goalsCompleted === 'true') {
      setHasCompletedGoals(true)
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

  const handleGoalsComplete = () => {
    setHasCompletedGoals(true)
    localStorage.setItem('goalsCompleted', 'true')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setHasVerifiedData(false)
    setHasCompletedGoals(false)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('dataVerified')
    localStorage.removeItem('goalsCompleted')
    localStorage.removeItem('userGoals')
  }

  // Si no está autenticado, mostrar login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  // Si está autenticado pero no ha verificado datos, mostrar Home
  if (isAuthenticated && !hasVerifiedData) {
    return <Home onDataVerified={handleDataVerification} onLogout={handleLogout} />
  }

  // Si ha verificado datos pero no ha completado objetivos, mostrar Goals
  if (isAuthenticated && hasVerifiedData && !hasCompletedGoals) {
    return <Goals onComplete={handleGoalsComplete} />
  }

  // Si ha completado todo, mostrar la aplicación normal
  return (
    <div className="App">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Nutrition onLogout={handleLogout} />} />
          <Route path="/nutrition" element={<Nutrition onLogout={handleLogout} />} />
          <Route path="/about" element={<About onLogout={handleLogout} />} />
          <Route path="/contact" element={<Contact onLogout={handleLogout} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App