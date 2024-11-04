import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Compañía</h4>
          <ul>
            <li>Acerca de</li>
            <li>Empleo</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Comunidades</h4>
          <ul>
            <li>Para artistas</li>
            <li>Desarrolladores</li>
            <li>Publicidad</li>
            <li>Inversionistas</li>
            <li>Proveedores</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li>Ayuda</li>
            <li>App móvil gratis</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Planes de Kodigo Music</h4>
          <ul>
            <li>Premium Individual</li>
            <li>Premium Duo</li>
            <li>Premium Familiar</li>
            <li>Versión gratuita</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Kodigo Music</p>
        <div className="social-icons">
          <span>📷</span> {}
          <span>🐦</span> {}
          <span>📘</span> {}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
