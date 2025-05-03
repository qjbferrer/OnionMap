import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import design1 from '../assets/design1.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const storedAccount = JSON.parse(localStorage.getItem('account'));

    if (storedAccount && storedAccount.email === email && storedAccount.password === password) {
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('No account found. Please create an account.');
    }
  };

  const redirectToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="app-container">
      <header className="header-bar">
        <img src={logo} className="header-logo" alt="logo" />
      </header>
  
      <div className="content-container">
        <div className="login-section">
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <label>User Login</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button type="submit" className="login-button">Login</button>

              <div className="divider-with-or">
                <hr className="line" />
                <span className="or-text">or</span>
                <hr className="line" />
              </div>
  
              <div className="google-login-btn">
                Login with Google
              </div>
  
              <p className="signup-text">
                Don't have an account?
                <span onClick={redirectToSignup} className="signup-link"> Sign Up</span>
              </p>

            </form>
          </div>
        </div>
  
        <div className="info-section">
          <div className="illustration">
            <img src={design1} alt="Onion Login Design" />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Login;