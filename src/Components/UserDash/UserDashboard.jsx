import React, { useState } from 'react';
import Cars from './Cars';
import Panier from './Panier';
import NavBare from '../../Components/LandingPage/NavBare';
import './section.css';

const UserDashboard = () => {
  const [showPanier, setShowPanier] = useState(false);

  const togglePanier = () => {
    setShowPanier(!showPanier);
  };

  return (
    <div>
      
      <NavBare onTogglePanier={togglePanier} />

      
      <div className="main">
        
        <div className={showPanier ? 'cars-section open' : 'cars-section'}>
          <Cars  />
        </div>

       
        {showPanier && (
          <div className={`panier-section ${showPanier ? 'show' : 'hide'}`}>
          <Panier onTogglePanier={togglePanier} />
        </div>        
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
