import React, { useState } from 'react';
import '../styles/Login.css';
import Footer from '../components/Footer'; 
const Login = () => {
  const [message, setMessage] = useState('');

  const handleSocialLogin = (platform) => {
    setMessage(`Pronto estará en funcionamiento: ${platform}`);
    setTimeout(() => setMessage(''), 3000); 
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage('BIENVENIDO A KODIGO MUSIC');
    setTimeout(() => setMessage(''), 3000); 
  };
  const handleForgotPassword = (e) => {
    e.preventDefault(); 
    setMessage('Nimodo jaja'); 
    setTimeout(() => setMessage(''), 3000); 
  };

  return (
    <div className="login-container">
      <img src="https://res.cloudinary.com/djolwqp8g/image/upload/v1730700398/Kodigo%20Music/andwzc5zolbnov9vejpy.png" alt="logo" className="logo" />
      <h1>Inicia sesión en Kodigo Music</h1>

      <button className="social-login google" onClick={() => handleSocialLogin('Google')}>
        <span role="img" aria-label="google">🌐</span> Continuar con Google
      </button>
      <button className="social-login facebook" onClick={() => handleSocialLogin('Facebook')}>
        <span role="img" aria-label="facebook">📘</span> Continuar con Facebook
      </button>
      <button className="social-login apple" onClick={() => handleSocialLogin('Apple')}>
        <span role="img" aria-label="apple">🍏</span> Continuar con Apple
      </button>

      <div className="divider"></div>

      <form onSubmit={handleLogin}>
        <label>Email o nombre de usuario</label>
        <input type="email" placeholder="Correo electrónico" required />

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña" required />

        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>

      {message && <p className="login-message">{message}</p>}

      <a className="forgot-password">¿Has olvidado tu contraseña?</a>
    </div>
  );
};

export default Login;
