import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ onLogout }) {
  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      onLogout()
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="https://via.placeholder.com/40x40/FFD61B/333333?text=S" 
            alt="Salinas Logo" 
            className="logo-img"
          />
          <span>SALINAS</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/goals" className="nav-link">
              Nutrición
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link user-link" title="Ver perfil de usuario">
              👤 Perfil
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="logout-btn">
              Salir 🚪
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar