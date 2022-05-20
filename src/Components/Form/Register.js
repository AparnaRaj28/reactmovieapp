import React from 'react'
import NavBar from '../Navbar/NavBar'
import './form.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <NavBar/>
        <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Register</h3>

                <div className="form-group">
                    <label className='label'>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" />
                </div>

                <div className="form-group">
                    <label className='label'>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="form-group">
                    <label className='label'>Mobile</label>
                    <input type="email" className="form-control" placeholder="Enter mobile" />
                </div>

                <div className="form-group">
                    <label className='label'>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/login"}>Login here</Link>
                </p>
            </form>
    </div>
  )
}

export default Register