import React from 'react'
import './UserDash.css'
import { Search } from 'lucide-react'
import Select from "./Select";
import { div } from 'framer-motion/client';


export default function FilterSection() {
    const filterSelect = [
        { "id": 1, "option": "marque", "values": ["mercedes", "audi", "dacia"] },
        { "id": 2, "option": "type", "values": ["electrique", "gazole"] },
        { "id": 3, "option": "annee", "values": ["2006", "2017", "2020"] },
        { "id": 4, "option": "disponibilite", "values": ["reserve", "entretien", "disponible"] },
        { "id": 5, "option": "tarif", "values": ["100", "200", "300"] },
        { "id": 6, "option": "date_debut", "values": [] }  
    ];
    

  return (

    <div className='test'>
    <div className='filter'>
        <form className='filter-select'>
            {filterSelect.map( filter =><Select key={filter.id} option = {filter.option} values = {filter.values} /> )}
        </form>

        <form>
            <input type='text' name='search' placeholder='Search by car name' />
            <button type='submit'><Search /></button>
        </form>
    </div>
    </div>
  )
}