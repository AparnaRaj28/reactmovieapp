import React from 'react'
import { useState } from 'react'
import NavBar from '../Navbar/NavBar'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import  { useNavigate  } from 'react-router-dom'

function Login() {
   
   const navigate = useNavigate();

  const login=()=>{
    Axios.post('http://localhost:3001/login',{
        username : username,
        password : password,
    }).then((response)=>{
        console.log(response);
        
    })

     if(username == "admin" && password == "admin"){
       navigate("/adminhome")
      console.log("Admin adshboard");
     }
};

  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')

  return (
    <div>
     <NavBar/>
     <br></br><br></br><br></br>
        <div className='form'>
                <h3 align="center" className='title'>Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username/Email</label>
                    <input type="text" className="form-control" placeholder="Username/Email" name="uname"
                     onChange={(e)=>{setusername(e.target.value);}} required/>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password"
                     onChange={(e)=>{setpassword(e.target.value);}} required/>
                </div>



                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={login}>Login</button>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </div> 
    </div>

  )
}

export default Login