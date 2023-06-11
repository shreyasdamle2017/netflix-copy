import React from 'react'
import './styles.css';

const InputFieldComponent = (props) => {
  return (
    <div className='input-container'>
        <input className='input-field' type={props.inputType} value={props.inputValue} />
        <label className='input-placeholder'>{props.placeHolder}</label>
    </div>
  )
}

export default InputFieldComponent
