import './App.css';
import React from'react';
import Home from './Components/Home';
import About from './Components/About';
import Register from './Components/Form/Register';



// import {BrowserRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './Components/Form/Login';
import AdminHome from './Components/Admin/AdminHome';
import UserList from './Components/Admin/pages/UserList';
import AdminViewUser from './Components/Admin/AdminViewUser';
import AdminMovie from './Components/Admin/AdminMovie';
import AddMovie from './Components/Admin/AddMovie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/adminhome' element={<AdminHome/>}/>
             {/* <Route path='/ahome' element={<Home/>}/> */}
            <Route path='/users' element={<AdminViewUser/>}/>
            <Route path='/movies' element={<AdminMovie/>}/>
            {/* <Route path='/addmovie' element={<AdminMovie/>}/> */}
           <Route path='/addmovie' element={<AddMovie/>}/> 
           
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
