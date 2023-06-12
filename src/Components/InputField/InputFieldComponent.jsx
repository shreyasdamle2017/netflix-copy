import React, { useState } from 'react'
import './styles.css';

const InputFieldComponent = (props) => {

  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className='input-container'>
        <input className='input-field' type={props.inputType} value={inputValue} onChange={handleInput}/>
        { !inputValue && (<label className='input-placeholder'>{props.placeHolder}</label>)}
    </div>
  )
}

export default InputFieldComponent
