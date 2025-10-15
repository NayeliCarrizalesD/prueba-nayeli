import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './pages/Home'
import Nutrition from './pages/Nutrition'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Verificar si hay una sesión guardada al cargar la app
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  // Si no está autenticado, mostrar login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  // Si está autenticado, mostrar la aplicación normal
  return (
    <div className="App">
      <Navbar onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App