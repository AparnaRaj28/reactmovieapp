import React from 'react'
import './Admin.css'
import MovieList from './pages/MovieList'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

function AdminMovie() {
  return (
    <div>
          <div>
        <AdminHeader/>
        <h6 class="title">Movies list</h6>
      <div className='admincontainer'>
      <AdminSidebar/>    
       <MovieList/>   
       
      </div>
      
    </div>
    </div>
  )
}

export default AdminMovie