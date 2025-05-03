import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import logo from '../assets/logo.png';
import design1 from '../assets/design1.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (password === confirm) {
      const account = { email, password };
      localStorage.setItem('account', JSON.stringify(account)); 
      alert('Your account has been created successfully!');
      navigate('/'); 
    } else {
      alert('Password does not match. Please try again.');
    }
  };

  const redirectToLogin = () => {
    navigate('/');
  };

  return (
    <div className="app-container">
      <header className="header-bar">
        <img src={logo} className="header-logo" alt="logo" />
      </header>

      <div className="content-container">
        <div className="login-section">
          <div className="login-form">
            <form onSubmit={handleSignupSubmit}>
              <label>Sign Up</label>
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
              <input 
                type="password" 
                placeholder="Confirm password" 
                value={confirm} 
                onChange={(e) => setConfirm(e.target.value)} 
              />
              <button type="submit" className="login-button">Create an Account</button>
            </form>
            <p className="login-text">
              Already have an account? 
              <span onClick={redirectToLogin} className="login-link"> Log In</span>
            </p>
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

export default SignUp;