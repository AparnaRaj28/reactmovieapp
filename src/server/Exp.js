const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const client=require('./connection');
//all the static files are found here
app.use(express.static(path.join(__dirname,'src')))
app.use(bodyParser.urlencoded({extended:false}))
app.engine('js',require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.json());
const cors = require("cors");
app.use(cors());

//whenever there is a get request
app.get('/',(req,res)=>{
res.send('Hello from express');

});


//getting movies from movie table
// client.connect();
app.get('/movies',(req,res)=>{
    client.query("select * from movie1",(err,result)=>{
        if(!err)
        {
            //console.log(result.rows)
            res.send(result.rows);
        }
    });
    client.end;
})

//inserting customer details
app.post('/register',(req,res)=>{
    
     const fullname = req.body.fullname
     const address = req.body.address
     const mobile = req.body.mobile
     const email = req.body.email
     const password = req.body.password
    
    client.query(
        `insert into customer(customer_name,address,email,mobile_number,password) values ('${fullname}','${address}','${email}','${mobile}','${password}')`,
                (err,result)=>{
                    console.log(err,result);
                    res.redirect('/register');
                   
                })
         client.end();
})

app.post('/login',(req,res)=>{
    const username= req.body.username;
    const password=req.body.password;

    client.query(
        `SELECT email,password FROM customer WHERE email=${username} AND password=${password}`,
        
        (err,result)=>{
            if(err)
            {
               res.send(err);
            }
                if(res){
                    res.send(result);
                    console.log("Correct")
                }
                else{
                    res.send({message : "Wrong username password "});
                }
            
        }
    );
});


//getting customers from customer table
// client.connect();
app.get('/users',(req,res)=>{
    client.query("select * from customer",(err,result)=>{
        if(!err)
        {
            //console.log(result.rows)
            res.send(result.rows);
        }
    });
    client.end;
})


// //inserting movies into movie1 table
app.post('/addmovie',(req,res)=>{
    const movieid=req.body.movieid;
    const moviename = req.body.moviename;
    const description = req.body.description;
    const language = req.body.language;
    const genre = req.body.genre;
    const hours = req.body.hours;

    client.query(`INSERT INTO movie1(movie_id,movie_name,description,language,movie_genre,movie_hours) VALUES ('${movieid}','${moviename}','${description}','${language}','${genre}','${hours}')`,
    // [moviename,description,language,genre,hours], 
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    }
    );

});


// app.put('/update/:id',(req,res)=>{
//     let movie = req.body;
//     let updateQuery=`update movie1 set 
//                      movie_name = '${movie.movie_name}',
//                      description = '${movie.description}',
//                      language =  '${movie.language}',
//                      movie_hours =  '${movie.movie_hours}'
//                       where movie_id = ${movie.movie_id}`

//     client.query(updateQuery,(err,result)=>{
//         if(!err){
//             res.send('Row updated successfully');
//         }
//         else{
//             console.log(err);
//         }
//     });
//     client.end;
// })

//updating movie
// app.put('/update/:id',(req,res)=>{
//     const {id} =req.params;
//     const {moviename,description,language,genre,hours} = req.body;
//     const sqlupdate= "UPDATE movie1 SET movie_name=?,description=?,language=?,movie_genre=?,movie_hours=? WHERE id = ?";
//     client.query(sqlupdate,[moviename,description,language,genre,hours],(error,result)=>{
//         if(error){
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

//delete movie
app.delete('/deletemovie/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);
    client.query(`DELETE FROM movie1 WHERE movie_id = ${id}`,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.listen(3001,()=>{
    console.log('Application running on port 3001...')
});