import React, { useState } from 'react';

export default function Select(props) {
  const { option, values } = props;

  // Default state
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {option === "date_debut" ? (
        <input
          type="date"
          name="date_debut"
          value={selectedValue}
          className="filter-date"
          onChange={handleChange}
        />
      ) : (
        <select name={option} value={selectedValue} onChange={handleChange}>
          {/* Placeholder option */}
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
