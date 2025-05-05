import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase.js'; // Import auth and createUser method
import '../styles/SignUp.css';
import logo from '../assets/logo.png';
import design1 from '../assets/design1.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    if (password === confirm) {
      try {
        // Create user using Firebase Authentication
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Your account has been created successfully!');
        navigate('/'); // Redirect to login page after successful account creation
      } catch (error) {
        alert('Error creating account: ' + error.message); // Show error if account creation fails
      }
    } else {
      alert('Passwords do not match. Please try again.');
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
            <img src={design1} alt="Onion SignUp Design" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
