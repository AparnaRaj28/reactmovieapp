import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './RowPost.css'


function RowPost() {
const [movies, setmovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://localhost:3001/movies')
          const jsonResult = await result.json()
    
          setmovie(jsonResult)
        }
    
        fetchData()
      }, [])

  return (
   
    <div className='row'>
 
    <div className='posters'>
    <div class="card-deck">
  <div class="cardrow">
    <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" alt="Card image cap"/>
    <div class="card-body">
     
      <p class="card-text"><small class="text-muted"><button class="btn btn-danger">Book now</button></small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180" alt="Card image cap"/>
    <div class="card-body">
      
    <p class="card-text"><small class="text-muted"><button class="btn btn-danger">Book now</button></small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="Card image cap"/>
    <div class="card-body">
    
    <p class="card-text"><small class="text-muted"><button class="btn btn-danger">Book now</button></small></p>
    </div>    
  </div>
  <div class="card">
    <img class="card-img-top" src="https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747" alt="Card image cap"/>
    <div class="card-body">
    
    <p class="card-text"><small class="text-muted"><button class="btn btn-danger">Book now</button></small></p>
    </div>    
  </div>
  <br></br>
  
</div>
    </div>
</div>
 
  )
  
}

export default RowPost