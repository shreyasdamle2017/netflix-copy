import React from 'react'
import './styles.css'

import { Link } from 'react-router-dom';


const NavbarComponent = () => {
  return (
    <div>
      <nav className='nav-links-container'>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link' to="/">Home</Link>
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
