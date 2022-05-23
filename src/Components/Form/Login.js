import React from 'react'
import { useState } from 'react'
import NavBar from '../Navbar/NavBar'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import  { Navigate  } from 'react-router-dom'

function Login() {

  const login=()=>{

    
    Axios.post('http://localhost:3333/login',{
        username : username,
        password : password,
    }).then((response)=>{
        console.log(response);
      
    })
  
};

  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')

  return (
    <div>
     <NavBar/>
     <br></br><br></br><br></br>
        <form className='form' method="post">
                <h3 align="center" className='title'>Login</h3>
                <br></br><br></br><br></br><br></br>
                <div className="form-group">
                    <label className='label'>Username/Email</label>
                    <input type="text" className="form-control" placeholder="Username/Email" name="uname"
                     onChange={(e)=>{setusername(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Password</label>
                    <input type="text" className="form-control" placeholder="Password" name="password"
                     onChange={(e)=>{setpassword(e.target.value);}}/>
                </div>



                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={login}>Login</button>
                <p className="forgot-password text-right">
                    Not Registered?  <Link to={"/register"}>Register here</Link>
                </p>
            </form> 
    </div>

  )
}

export default Login