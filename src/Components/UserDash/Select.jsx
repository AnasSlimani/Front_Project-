
import React, { useState } from 'react';
import './UserDash.css';

export default function Select(props) {
  const { option, values } = props;

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {/* Champs spécifiques pour date_debut et date_fin */}
      {option === 'date_debut' || option === 'date_fin' ? (
        <div className="date-input-container">
          <input
            type="date"
            name={option}
            value={selectedValue}
            className="filter-date"
            onChange={handleChange}
          />
          {!selectedValue && (
            <span className="date-placeholder">
              {option === 'date_debut' ? 'Date début' : 'Date fin'}
            </span>
          )}
        </div>
      ) : (
        <select name={option} value={selectedValue} onChange={handleChange}>
          <option value="" disabled>
            {option}
          </option>
          {values.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
