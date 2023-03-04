import React from 'react';

export const CheckBox = ({ name, checked, setChecked, label }) => {
  return (
    <>
      <input 
        id={name}
        name={name}
        type='checkbox'
        checked={checked}
        onChange={setChecked}
      />
      <label htmlFor={name}>{label}</label>
    </>
  )
};
