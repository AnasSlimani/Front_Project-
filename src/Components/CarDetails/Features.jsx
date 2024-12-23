import React from 'react'
import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";



export default function Features(props) {
    const CARid = props.ID;
    const [car, setCar] = useState([]);
    const [features, setFeatures] = useState([]);
    
    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:8082/api/vehicules/${CARid}`);
                const data = await response.json();
                setCar(data);
                if (data.features) {
                    const parsedFeatures = typeof data.features === 'string' ? JSON.parse(data.features) : data.features;
                    setFeatures(Object.entries(parsedFeatures)); // Convert object to array for mapping
                }
            } catch (error) {
                console.log("Error fetching the car: ", error.message);
            }
        };

        fetchCar();
    }, [CARid]);

    return (
        <div className='p-10 border-2 shadow-md rounded-xl my-7 text-white'>
            <h2 className='font-bold text-2xl features'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-3 lg:grid-cols-4 gap-8'>
                {features.map(([key, value]) => (
                    value && ( 
                        <div key={key} className='flex gap-2 items-center'>
                            <FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary' />
                            <h2>{key}</h2>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

