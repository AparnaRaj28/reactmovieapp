import React from 'react'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Admin.css'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { useNavigate } from "react-router-dom";


function MovieList() {

const [movies, setmovie] = useState([])
let nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://localhost:3001/movies')
          const jsonResult = await result.json()
    
          setmovie(jsonResult)
        }
    
        fetchData()
      }, [])


      const del = async (id) => {
        if(window.confirm("Are you sure you want to delete?")){
        return await axios
          .get(`http://localhost:3001/deletemovie/${id}`)
          .then((response) => {
            //setData(response.data);
            alert("movie Deleted");
            window.location.reload(false);
            nav("/movies");
          })
          .catch((err) => console.log(err));
        }
  
      };
      
    // const deletemovie=async(id)=>{
    //     if(window.confirm("Are you sure you want to delete ?"+id)){
    //       const response = await Axios.delete(`http://localhost:3001/deletemovie/${id}`);
    //         if(response.status == 200){
    //           window.alert("User deleted!");
    //           MovieList();
    //         }
    //     }
    // }

//     const setData = (movie_id,movie_name,description,language,movie_genre,movie_hours)=>{
//       localStorage.setItem('ID',movie_id)
   
//     localStorage.getItem('moviename',moviename);
// localStorage.getItem('description',description);
// localStorage.getItem('language',language);
// localStorage.getItem('genre',genre);
// localStorage.getItem('hours',hours);
//     }
  
//      const getData = ()=>{
//        Axios.get('http://localhost:3001/movies').then((getData)=>{
           
//        })

//      }

//      const setID=(id)=>{
//           console.log(id);
//           localStorage.setItem('ID',id)
//      }

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
           <td>
            
             <button type="button" class="btn btn-secondary" > <Link className='link' to={`/update/${movies.movie_id}`}>Update</Link></button></td>
             
           <td><button type="button" class="btn btn-danger" onClick={() => del(movies.movie_id)}>Remove</button></td>
    </tr>
     )}
    <button type="button" class="btn btn-light"><Link to={'/addmovie'}>Add movie</Link></button>
      </tbody>
      </table>
      
   </> 
 
  )
  
}

export default MovieList