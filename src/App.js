import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/pagelanding/LandingPage'
import UserDash from './pages/userDashbord/UserDash';
import NavBar from './Components/LandingPage/Navbar';
import AdminDash from './pages/adminDashboard/AdminDash';
import SignUp from './pages/signup/SignUp'


function App(){
  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<UserDash />} />
        <Route path='/admin' element={<AdminDash />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App
