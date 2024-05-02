import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register.js';
import ARComponents from './components/ARComponents';
import { Projects2 } from './components/Project2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/NavBar.js';

function App() {
  const [userId, setUserId] = useState(null);

  // Handle userId state setting after login
  const handleLoginSuccess = (userId) => {
    setUserId(userId);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onLoginSuccess={handleLoginSuccess} />} />
        {/* Pass userId to Projects2 component */}
        <Route path='/projects/:userId' element={<Projects2 />} />
        <Route path='/register' element={<Register />} />
        <Route path='/navbar' element={<NavBar />} />
        <Route path="/ar" element={<ARComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
