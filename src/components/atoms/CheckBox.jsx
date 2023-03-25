import React from 'react';

export const CheckBox = ({ name, checked, setChecked, label }) => {
  return (
    <>
      <input
        className="form-check-input" 
        id={name}
        name={name}
        type='checkbox'
        checked={checked}
        onChange={setChecked}
      />
      <label className="form-check-label"  htmlFor={name}>{label} </label>
    </>
  )
};
