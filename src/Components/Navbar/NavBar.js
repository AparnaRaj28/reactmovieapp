import React from 'react'
import About from '../About';
import "./NavBar.css";
// import logo from"./logo.png";
import { Link } from 'react-router-dom'
 
function NavBar() {
  return (
    <div className='navbar'>

        {/* <img className="logo" src={logo}
              alt="Movie Ticket"></img> */}
              <h1>MovieTicket</h1>
              <Link to={"/about"} className="text-light bg-dark"> About </Link>
              <Link to={"/"} className="text-light bg-dark"> Home</Link>
              
      
    </div>
  )
}

export default NavBar