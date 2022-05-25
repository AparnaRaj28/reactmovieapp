import React from 'react'
import '../Form/form.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import AdminHeader from './AdminHeader'
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

function UpdateMovie() {
    let nav = useNavigate();

    
    const [moviename,setmoviename]= useState([]);
  

    let {id} = useParams();
  console.log(id);

   const updateMovie = ()=>{
     Axios.put(`https://localhost:3001/update/${id}`,
     {moviename:moviename}).then((response)=>{
      
     })

   
   }

  return (
    <div>
       <AdminHeader/>
        <br></br><br></br><br></br>
        <form className='form'>
                <h3 align="center" className='title'>Update movie</h3>

       

                <div className="form-group">
                    <label className='label'>Movie Title</label>
                    <input type="text" className="form-control" placeholder="title" 
                      name="movie_name"
                       onChange={(event)=>{
                         setmoviename(event.target.value);
                       }}
                      // value={data.movie_name}
                     />
                </div>

                <div className="form-group">
                    <label className='label'>Description</label>
                    <input type="text" className="form-control" placeholder="Description"  name="description"
                     
                    //  onChange={handleChange}
                    //  value={data.description}
                    />
                </div>

                <div className="form-group">
                    <label className='label'>Language</label>
                    <input type="text" className="form-control" placeholder="Language" name="language" 
                    // value={data.language}
                    // onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                    <label className='label'>Genre</label>
                    <input type="text" className="form-control" placeholder="Genre" name="genre" 
                    //   onChange={handleChange}
                    //  value={data.movie_genre}
                    />
                </div>

                <div className="form-group">
                    <label className='label'>Num of Hours</label>
                    <input type="text" className="form-control" placeholder="Number of hours" name="hours"
                    //  onChange={handleChange}
                    // value={data.movie_hours}
                   />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"
                   onClick={updateMovie}>EDIT</button>
              
            </form>
    </div>
   
  )
}

export default UpdateMovie