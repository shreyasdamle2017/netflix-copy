import React from 'react'
import './styles.css'
import InputFieldComponent from '../InputField/InputFieldComponent'
import CustomButtonComponent from '../CustomButton/CustomButtonComponent'
import { Link } from 'react-router-dom'
const LoginComponent = () => {
  return (
    <div className='login-component-container'>
        <div className='sign-in-label-container'>
            <label style={{ color: "aliceblue", fontSize:'30px'}}>Sign In</label>
        </div>
        <div className='input-credentials-container'>
            <InputFieldComponent placeHolder='Email Or phone number' inputType='text'/>
            <InputFieldComponent placeHolder='Password' inputType='password'/>
            <CustomButtonComponent label='Sign In'/>
            <div className='checkbox-container'>
                <div>
                    <label>
                        <input
                        type="checkbox"
                        />
                    Remember me!!
                    </label>
                </div>
                <div className='help-container'>
                    <Link style={{textDecoration: 'none', color:'white', cursor:'pointer'}} to="/about">
                        Need help?
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent
