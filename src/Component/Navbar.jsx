/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <h1>Inspired School</h1>
      <div className="navbarlinks">
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/apply' className="applynow">Apple Now</Link>
      </div>
    </div>
  )
}

export default Navbar
