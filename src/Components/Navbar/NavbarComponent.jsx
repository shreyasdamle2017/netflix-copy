import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom';

import logo from './Static/Netflix Logo.png';

const NavbarComponent = () => {
  return (
    <div>
      <nav className='nav-links-container'>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link' to="/home"><img className='nav-link-logo' src = {logo} alt='logo'/>  </Link>
          </li>  
          <li>
            <Link className='nav-link' to="/about">About</Link>
          </li>
          <li>
            <Link className='nav-link' to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>  
  </div>
  )
}

export default NavbarComponent
