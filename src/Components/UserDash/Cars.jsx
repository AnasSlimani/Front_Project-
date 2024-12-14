import React from 'react'
import './Cars.css'
import vec1 from '../../images/mercedes.png';
import vec2 from '../../images/bmw.png';
import vec3 from '../../images/toyota.png';
import car1 from '../../images/car1.jpg';

const Cars = () => {
  return (
    <div class="containere">
         <div class="card__container">
            <article class="card__article">
               <img src={car1} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">500DH , NON RESERVE</span>
                  <h2 class="card__title">BMW X5</h2>
                  <div className="buttons">
                  <a href="#" class="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>
            <article class="card__article">
               <img src={car1} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <div className="buttons">
                  <a href="#" class="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>
            <article class="card__article">
               <img src={car1} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <div className="buttons">
                  <a href="#" class="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>

            <article class="card__article">
               <img src={car1} alt="image" class="card__img " />

               <div class="card__data">
                  <span class="card__description">Poon Hill, Nepal</span>
                  <h2 class="card__title">Starry Night</h2>
                  <div className="buttons">
                  <a href="#" class="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>

            <article class="card__article">
               <img src={car1} alt="image" class="card__img" />

               <div class="card__data">
                  <span class="card__description">Bojcin Forest, Serbia</span>
                  <h2 class="card__title">Path Of Peace</h2>
                  <div className="buttons">
                  <a href="#" class="card__button">Read More</a>
                  <button>RESERVE</button>
                  </div>
               </div>
            </article>
         </div>
      </div>
  )
}

export default Cars