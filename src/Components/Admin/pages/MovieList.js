import React from 'react'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Admin.css'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'


function MovieList() {

const [movies, setmovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://localhost:3001/movies')
          const jsonResult = await result.json()
    
          setmovie(jsonResult)
        }
    
        fetchData()
      }, [])

    //   const deletemovie=(id)=>{
    //     Axios.delete(`http://localhost:3001/deletemovie/${id}`);
    // }
    const deletemovie=(id)=>{
        if(window.confirm("Are you sure you want to delete ?"+id)){
            Axios.delete(`http://localhost:3001/deletemovie/${id}`);
            console.log("movie deleted");
          
        }
    }


  return (
   
   <>
     
     <table class="table table-striped table-dark">
     <thead>
    <tr>
      <th scope="col">MovieId</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Language</th>
      <th scope="col">Genre</th>
      <th scope="col">No.Hours</th>
      <th scope="col">Update/Remove</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody> 
    {movies.map(movies =>
    <tr>
            <td>{movies.movie_id}</td>
            <td>{movies.movie_name}</td>
           <td>{movies.description}</td>
           <td>{movies.language}</td>
           <td>{movies.movie_genre}</td>
           <td>{movies.movie_hours}</td>
           <td><button type="button" class="btn btn-secondary"><Link className='link' to={`/update/${movies.movie_id}`}>Update</Link></button></td>
           <td><button type="button" class="btn btn-danger" onClick={()=>deletemovie(movies.movie_id)}>Remove</button></td>
    </tr>
     )}
    <button type="button" class="btn btn-light"><Link to={'/addmovie'}>Add movie</Link></button>
      </tbody>
      </table>
      
   </> 
 
  )
  
}

export default MovieList