import React from 'react'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import Home from './pages/Home'

function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <div className='admincontainer'>
      <AdminSidebar/>
      <Home/>
      </div>
    </div>
  )
}

export default AdminHome