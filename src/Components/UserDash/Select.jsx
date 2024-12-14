import React from 'react'

export default function Select(props) {
    const values = props.values;
  return (

    <select name={props.option}>
        <option value=""  disabled >{props.option}</option>
        {values.map( value => (
                    <option value= {value} > {value} </option>
        ))}
        
    </select>

  )
}