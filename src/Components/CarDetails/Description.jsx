import React from 'react'
import { useState, useEffect } from 'react';


export default function Description(props) {
    const CARid = props.ID;
    const [car, setCar] = useState([]);
    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:8082/api/vehicules/${CARid}`);
                const data = await response.json();
                setCar(data)
            } catch (error) {
                console.log("Error fetching the car : ", error.message)
            }
        }

        fetchCar();
    }, []);

    return (
        <div>
            <div className='p-10 rounded-xl shadow-md mt-6 border-2 text-white ' >
                <h2 className='my-2 font-bold text-2xl' >Description</h2>
                <p> {car.description} </p>
            </div>
        </div>
    )
}
