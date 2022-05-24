import React from 'react'
import '../Form/form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import AdminHeader from './AdminHeader'



function AddMovie() {
 
    const [movieid,setmovieid] = useState(0);
    const [moviename,setmoviename] = useState("");
    const [description,setdescription] = useState("");
    const [language,setlaguage] = useState("");
    const [genre,setgenre] = useState("");
    const [hours,sethours] = useState("");
   
    // const displayInfo=()=>{
    //     console.log(moviename + description+ language + genre + hours);
    // };

    const add=()=>{
        Axios.post('http://localhost:3001/addmovie',{
            movieid:movieid,
            moviename : moviename,
            description  : description,
            language   : language,
            genre    : genre,
            hours  : hours,
        }).then(()=>{
            console.log("Success");
            window.alert("New movie is added");
          
        });
    };


  return (
    <div>

<div>
       <AdminHeader/>
        <br></br><br></br><br></br>
        <div className='form'>
                <h3 align="center" className='title'>Add movie</h3>

                <div className="form-group">
                    <label className='label'>Movie ID</label>
                    <input type="number" className="form-control" placeholder="ID" name="movieod"
                    onChange={(e)=>{setmovieid(e.target.value);}} />
                </div>

                <div className="form-group">
                    <label className='label'>Movie Title</label>
                    <input type="text" className="form-control" placeholder="title" name="moviename"
                    onChange={(e)=>{setmoviename(e.target.value);}} />
                </div>

                <div className="form-group">
                    <label className='label'>Description</label>
                    <input type="text" className="form-control" placeholder="Description"  name="description"
                    onChange={(e)=>{setdescription(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Language</label>
                    <input type="text" className="form-control" placeholder="Language" name="language" 
                    onChange={(e)=>{setlaguage(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Genre</label>
                    <input type="text" className="form-control" placeholder="Genre" name="genre" 
                    onChange={(e)=>{setgenre(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label className='label'>Num of Hours</label>
                    <input type="text" className="form-control" placeholder="Number of hours" name="hours"
                    onChange={(e)=>{sethours(e.target.value);}}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={add}>Add movie</button>
              
            </div>
    </div>
    </div>
  )
}

export default AddMovie