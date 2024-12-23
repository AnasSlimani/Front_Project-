import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/pagelanding/LandingPage'
import UserDash from './pages/userDashbord/UserDash';
import NavBar from './Components/LandingPage/Navbar';
import AdminDash from './pages/adminDashboard/AdminDash';
import SignUp from './pages/signup/SignUp'
import CarDetail from './pages/CarDetails/CarDetail';


function App(){
  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<UserDash />} />
        <Route path='/admin' element={<AdminDash />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/CarDetail/:id" element={<CarDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App

