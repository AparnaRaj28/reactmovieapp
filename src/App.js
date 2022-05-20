import './App.css';
import React from'react';
import Home from './Components/Home';
import About from './Components/About';
import Register from './Components/Form/Register';

// import {BrowserRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './Components/Form/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
