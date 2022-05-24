import React from 'react'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AHome from './pages/AHome'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import UserList from './pages/UserList'

function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <div className='admincontainer'>
      <AdminSidebar/>
      <AHome/>

      
      </div>
    </div>
  )
}

export default AdminHome