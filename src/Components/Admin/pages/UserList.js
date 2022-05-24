import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function UserList() {
const [users, setusers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch('http://localhost:3001/users')
          const jsonResult = await result.json()
    
          setusers(jsonResult)
        }
    
        fetchData()
      }, [])

  return (
   
   <>
     
     <table class="table table-striped table-dark">
     <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Remove User</th>
    </tr>
  </thead>
  <tbody> 
    {users.map(users =>
    <tr>
            <td>{users.customer_id}</td>
           <td>{users.customer_name}</td>
           <td>{users.email}</td>
           <td>{users.password}</td>
           <td><button type="button" class="btn btn-danger">Remove</button></td>
    </tr>
     )}
      </tbody>
      </table>
   </> 
 
  )
  
}

export default UserList