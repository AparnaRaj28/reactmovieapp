import React from 'react'
import './Admin.css'
import UserList from './pages/UserList'
import AdminHeader from './AdminHeader'

import AdminSidebar from './AdminSidebar'

function AdminViewUser() {
  return (
    <div>
        <AdminHeader/>
        <h6 class="title">Users list</h6>
      <div className='admincontainer'>
      <AdminSidebar/>
     
       <UserList/>    
      </div>
    </div>
  )
}

export default AdminViewUser