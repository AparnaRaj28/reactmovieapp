import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function RowPost() {
const [movies, setmovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://localhost:3333/movies')
          const jsonResult = await result.json()
    
          setmovie(jsonResult)
        }
    
        fetchData()
      }, [])

  return (
   
   <>
    {movies.map(movies =>
        // <h3>{customer.address}</h3>
      <div className='card text-white bg-dark mb-3'>
         <div className='card text-white bg-dark mb-3'>
         {/* <img className="card-img-top" src={movies.poster} alt="Card image cap" /> */}
          {/* <div className='card-img-top'>{movies.poster}</div> */}
         <div className='card-body'>
              <h5 className="card-title" color='black'>{movies.movieName}</h5>
              <p className='card-text'>{movies.description}</p>
         </div>
         <div class="card-footer">
            <small class="text-muted"><button type="button" class="btn btn-danger">Book now</button></small>
       </div>
         </div>

      </div>

     )}
   </>
 
  )
  
}

export default RowPost