import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div 
         className='banner'>
            <div className='content' >
              <br></br><br></br><br></br>
                <h1 className='title'>Book your tickets here! </h1>
                <br></br><br></br><br></br>
                <div className='banner_buttons' >
                <Link to={"/register"} className="button"> Register here! </Link>
                <Link to={"/login"} className="button"> Login </Link>
                    {/* <button className='button' >Register here!</button> */}
                    {/* <button className='button' >My list</button> */}
                </div>
                {/* <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</h1> */}
            </div>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/><br/>
        <div className="fade_bottom" />
        </div >
  )
}

export default Banner