import React, { useState , useEffect } from 'react'
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



   const [cars,setCars] = useState([]);
   useEffect(() => {
      const fetchCars = async () => {
          try {
              const response = await fetch("http://localhost:8082/api/vehicules");
              const data = await response.json();
              setCars(data)
          } catch (error) {
              console.log("Error fetching the cars: ", error.message)
          }
      }

      fetchCars();
  },[]);





  
   return (
    <div className="containere">
         <div className="card__container">
            {cars.map(car => (
               <article className="card__article" key={car.id} >
               <img src={`http://localhost:8082${car.imagepath}`} alt="image" className="card__img" />

               <div className="card__data">
                  <span className="card__description">{car.prix} , {car.status}</span>
                  <h2 className="card__title"><img src={MercLogo} alt="BMW Logo" className="iconse" />{car.marque} {car.modele} </h2>
                  <div className="buttons">
                  <a href="#" className="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>
            )) }
            
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