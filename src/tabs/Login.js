import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../firebase.js'; // Import necessary Firebase functions
import '../styles/Login.css';
import logo from '../assets/logo.png';
import design1 from '../assets/design1.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sign in using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      alert('Error logging in: ' + error.message); // Display error message if login fails
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info
      const user = result.user;
      alert('Google login successful! Welcome ' + user.displayName);
      navigate('/home');
    } catch (error) {
      alert('Error logging in with Google: ' + error.message); // Display error message if Google login fails
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
  
              <div className="google-login-btn" onClick={handleGoogleLogin}>
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
