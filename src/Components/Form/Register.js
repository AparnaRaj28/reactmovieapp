import React, { useState } from 'react'
import NavBar from '../Navbar/NavBar'
import './form.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
function Register() {
    
    const [fullname,setfullname] = useState('')
    const [address,setaddress] = useState('')
    const [mobile,setmobile] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const register=()=>{
        Axios.post('http://localhost:3333/register',{
            fullname : fullname,
            address  : address,
            mobile   : mobile,
            email    : email,
            password  : password
        }).then((response)=>{
            console.log(response);
          
        })
    };


  return (
    <div>
        <NavBar/>
        <br></br><br></br><br></br>
        <form className='form' method="post">
                <h3 align="center" className='title'>Register</h3>

                <div className="form-group">
                    <label className='label'>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" name="fullname"
                    onChange={(e)=>{setfullname(e.target.value);}} />
                </div>

                <div className="form-group">
                    <label className='label'>Address</label>
                    <input type="text" className="form-control" placeholder="Address"  name="address"
                    onChange={(e)=>{setaddress(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Mobile</label>
                    <input type="text" className="form-control" placeholder="Enter mobile" name="mobile" 
                    onChange={(e)=>{setmobile(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" 
                    onChange={(e)=>{setemail(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"
                    onChange={(e)=>{setpassword(e.target.value);}}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/login"}>Login here</Link>
                </p>
            </form>
    </div>
  )
}

export default Register