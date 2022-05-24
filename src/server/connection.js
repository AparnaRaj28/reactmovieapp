const {Client} = require('pg');

const client = new Client({
    host:'localhost',
    user:'postgres',
    password:'root',
    database:'MovieDb',
    port:5432
})

client.connect((err)=>{
    if(err) throw err;
    else
        console.log("Connected Successfully!!")
})

module.exports = client