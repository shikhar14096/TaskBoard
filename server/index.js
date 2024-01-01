

const pg=require('pg')
const express=require('express')
const cors=require('cors')
const app = express();
const client=require('./db');
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



// const userSchema = new pg.Schema({
//     name: String,
//     email: String,
//     password: String
// })

client.connect();

client.query('select *from TaskBoard',(err,result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
})


app.listen(9002,() => {
    console.log("BE started at port 9002")
})