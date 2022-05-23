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
        "SELECT email,password FROM customer WHERE email= ? AND password=?",
        [username,password],
        (err,result)=>{
            if(err)
            {
               res.send(err);
            }
                if(res){
                    res.send(result);
                }
                else{
                    res.send({message : "Wrong username password "});
                }
            
        }
    );
});


// //trying to get employee with particular id
// app.get('/employees/:id',(req,res)=>
//   {
//     client.query(`select * from employee where emp_id = ${req.params.id}`,
//     (err,result)=>{
//         if(!err){
//            res.send(result.rows)
//           // console.log(result.rows)
//         }
//     });
//     client.end;
// })

// //insert data into table
// app.post('/employees',(req,res)=>{
//     const employee = req.body;
//     let insertQuery = `insert into employee values(${employee.emp_id},
//         '${employee.emp_name}', '${employee.emp_dept}',${employee.emp_sal})`

//         client.query(insertQuery,(err,result)=>{
//             if(!err){
//                 res.send('Inserted row successfully')
//             }
//             else{
//                 console.log(err)
//             }
//         })
//         client.end;
// })


// app.post('/login',(req,res)=>{
//     // console.log(req.body.username);
//     // console.log(req.body.password);
//     var uname=req.body.username;
//     var password=req.body.password;

//     if(uname == "admin" && password == "admin")
//     {
//     //    res.render(__dirname +`/public/home.html`,{name:req.body.username});
//       console.log('admin login success');
//     }
//     else
//     {
//         res.sendFile(`${__dirname}/public/invalid.html`);
//     }
//     });
    
// app.get('/login',(req,res)=>{

//         res.sendFile(`${__dirname}/public/login.html`);
//         });


// //getting data from employee table
// client.connect();
// app.get('/employees',(req,res)=>{
//     client.query("select * from employee",(err,result)=>{
//         if(!err)
//         {
//             //console.log(result.rows)
//             res.send(result.rows)
//         }
//     });
//     client.end;
// })

// //trying to get employee with particular id
// app.get('/employees/:id',(req,res)=>
//   {
//     client.query(`select * from employee where emp_id = ${req.params.id}`,
//     (err,result)=>{
//         if(!err){
//            res.send(result.rows)
//           // console.log(result.rows)
//         }
//     });
//     client.end;
// })

// //insert data into table
// app.post('/employees',(req,res)=>{
//     const employee = req.body;
//     let insertQuery = `insert into employee values(${employee.emp_id},
//         '${employee.emp_name}', '${employee.emp_dept}',${employee.emp_sal})`

//         client.query(insertQuery,(err,result)=>{
//             if(!err){
//                 res.send('Inserted row successfully')
//             }
//             else{
//                 console.log(err)
//             }
//         })
//         client.end;
// })

// //update
// app.put('/employees/:id',(req,res)=>{
//     let employee = req.body;
//     let updateQuery=`update employee set 
//                      emp_name = '${employee.emp_name}',
//                      emp_dept = '${employee.emp_dept}',
//                      emp_sal =  ${employee.emp_sal}
//                       where emp_id = ${employee.emp_id}`

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

app.listen(3333,()=>{
    console.log('Application running on port 3333...')
});