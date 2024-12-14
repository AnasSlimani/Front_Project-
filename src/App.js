import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/pagelanding/LandingPage'
import UserDash from './pages/userDashbord/UserDash';


function App(){
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<UserDash />} />
      </Routes>
    </Router>
  );
}

export default App
