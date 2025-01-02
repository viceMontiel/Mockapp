import './styles/NavBar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <p>MOCKAPP</p>
      {/* Ícono de menú hamburguesa para dispositivos móviles */}
      <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#preparaciones">Preparaciones</Link>
        </li>
        <li>
          <Link to="/#fet">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
    )
}

export default NavBar