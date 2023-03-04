import React from 'react'

export const CheckBox = ({ name, checked, setChecked }) => {
  return (
    <>
        <input 
            name={ name }
            type='checkbox'
            checked={ checked }
            onChange={ setChecked }
        />
        <label>{ name }</label>
    </>
  )
}