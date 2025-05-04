import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './tabs/Login';
import SignUp from './tabs/SignUp';
import Home from './tabs/Home';
import Main from './tabs/Main';
import About from './tabs/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;