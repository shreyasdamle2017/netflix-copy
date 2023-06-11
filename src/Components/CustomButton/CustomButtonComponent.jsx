import React from 'react'
import './styles.css'

const CustomButtonComponent = ({label, onClick}) => {
  return (
    <div className='custom-button-container'>
      <button className='custom-button'>
      {label}
      </button>
    </div>
  )
}

export default CustomButtonComponent
