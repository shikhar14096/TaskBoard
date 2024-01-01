const {Client} =require('pg');

const client=new Client({
    host:"localhost",
    port: 5432,
    user:"postgres",
    password: "mpph14096",
    database:"TaskBoard"
})
client.on("connect", ()=>{
    console.log("database connected");
})

client.on("end",()=>{
    console.log("connection end");
})

module.exports=client;
