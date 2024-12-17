import React, { useState, useEffect } from 'react';
import './UserDash.css';
import { Search } from 'lucide-react';
import Select from './Select';

export default function FilterSection() {
  const [filterOptions, setFilterOptions] = useState({
    marque: [],
    type: [],
    annee: [],
    disponibilite: [],
    tarif: ['100', '200', '300'],
  });

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [marques, types, annees, status] = await Promise.all([
          fetch('http://localhost:8082/api/vehicules/marques').then(res => res.json()),
          fetch('http://localhost:8082/api/vehicules/types').then(res => res.json()),
          fetch('http://localhost:8082/api/vehicules/annees').then(res => res.json()),
          fetch('http://localhost:8082/api/vehicules/status').then(res => res.json()),
        ]);
  
        console.log('Received annees:', annees); // Pour le débogage
  
        setFilterOptions(prevState => ({
          ...prevState,
          marque: Array.isArray(marques) ? marques : [],
          type: Array.isArray(types) ? types : [],
          annee: Array.isArray(annees) ? annees.map(String) : [],
          disponibilite: Array.isArray(status) ? status : [],
        }));
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
    };
  
    fetchFilterOptions();
  }, []);

  const filterSelect = [
    { id: 1, option: 'marque', values: filterOptions.marque },
    { id: 2, option: 'type', values: filterOptions.type },
    { id: 3, option: 'annee', values: filterOptions.annee },
    { id: 4, option: 'disponibilite', values: filterOptions.disponibilite },
    { id: 5, option: 'tarif', values: filterOptions.tarif },
    { id: 6, option: 'date_debut', values: [] },
    { id: 7, option: 'date_fin', values: [] },
  ];

  return (
    <div className="test">
      <div className="filter">
        <form className="filter-select">
          {filterSelect.map((filter) => (
            <Select key={filter.id} option={filter.option} values={filter.values} />
          ))}
        </form>

        <form>
          <input type="text" name="search" placeholder="Search by car name" />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
}