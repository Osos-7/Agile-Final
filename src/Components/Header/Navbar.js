import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/home" style={{ textDecoration: 'none', color:"black" }}>
        <div className='logo'>
          <h2 className=" d-flex align-items-center gap-1">
            <i className="ri-book-3-line"></i>NAGAحNY.
          </h2>
        </div>
      </Link>
      <nav className='item'>
        <ul className='ul'>
          <li className='hover-underline-animation'>
            <Link to='/home' >Home</Link>
          </li>
          <li className='hover-underline-animation'>
            <Link to='/about' >About</Link>
          </li>
          <li className='hover-underline-animation'>
            <Link to='/donate' >Donate</Link>
          </li>
          <li className='hover-underline-animation'>
            <Link to='/' >Login</Link>
          </li>
          <li className='hover-underline-animation'>
            <Link to='/archivestudent' >Archive-Student</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar