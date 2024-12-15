import React, { useState } from 'react';

export default function Select(props) {
  const { option, values } = props;

  // Default state for select dropdown
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select
      name={option}
      value={selectedValue}
      onChange={handleChange}
    >
      {/* Add a placeholder option */}
      <option value="" disabled>
        {option}
      </option>

      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
