import React, { useState } from 'react'
import './Cars.css'
import vec1 from '../../images/mercedes.png';
import vec2 from '../../images/bmw.png';
import vec3 from '../../images/toyota.png';
import car1 from '../../images/car1.jpg';
import bmwLogo from '../../images/bmwsvg.svg';
import MercLogo from '../../images/mercedessvg.svg';
import ToyotaLogo from '../../images/toyotasvg.svg';
import ReservationForm from './ReservationForm';

const Cars = () => {
   const [showForm, setShowForm] = useState(false);
   const [selectedCar, setSelectedCar] = useState('');
 
   const handleReserveClick = (carName) => {
     setSelectedCar(carName);
     setShowForm(true);
   };
  
   return (
    <div className="containere">
         <div className="card__container">
            <article className="card__article">
               <img src={vec1} alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">500DH , NON RESERVE</span>
                  <h2 className="card__title"><img src={MercLogo} alt="BMW Logo" className="iconse" />BMW X5</h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button onClick={() => handleReserveClick('BMW X5')}>RESERVE</button>
                  </div>
               </div>
            </article>
            <article className="card__article">
               <img src={vec2} alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">Vancouver Mountains, Canada</span>
                  <h2 className="card__title"><img src={bmwLogo} alt="BMW Logo" className="iconse" />The Great Path</h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button onClick={() => handleReserveClick('BMW X5')}>RESERVE</button>
                  </div>
               </div>
            </article>
            <article className="card__article">
               <img src={vec3} alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">Vancouver Mountains, Canada</span>
                  <h2 className="card__title"><img src={ToyotaLogo} alt="BMW Logo" className="iconse" />The Great Path</h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button onClick={() => handleReserveClick('BMW X5')}>RESERVE</button>
                  </div>
               </div>
            </article>

            <article className="card__article">
               <img src={vec1} alt="image" className="card__img " />

               <div className="card__data">
                  <span className="card__description">Poon Hill, Nepal</span>
                  <h2 className="card__title"><img src={MercLogo} alt="BMW Logo" className="iconse" />Starry Night</h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button onClick={() => handleReserveClick('BMW X5')}>RESERVE</button>
                  </div>
               </div>
            </article>

            <article className="card__article">
               <img src={vec1} alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">Bojcin Forest, Serbia</span>
                  <h2 className="card__title"><img src={MercLogo} alt="BMW Logo" className="iconse" />Path Of Peace</h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button onClick={() => handleReserveClick('BMW X5')}>RESERVE</button>
                  </div>
               </div>
            </article>
         </div>
         {showForm && (
        <ReservationForm
          carName={selectedCar}
          onClose={() => setShowForm(false)}
        />
      )}
      </div>
  )
}

export default Cars