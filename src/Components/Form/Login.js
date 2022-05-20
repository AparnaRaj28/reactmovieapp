import React from 'react'
import NavBar from '../Navbar/NavBar'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
     <NavBar/>
     <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username/Email</label>
                    <input type="text" className="form-control" placeholder="Username/Email" name="uname"/>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="text" className="form-control" placeholder="Password" name="password"/>
                </div>



                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
    </div>

  )
}

export default Login