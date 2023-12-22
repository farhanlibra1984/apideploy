const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config()
app.use(cors());

app.get('/api/test', (req, res)=>{
    res.json("hello"+Date.now());
})

app.get('/api/test2', (req, res)=>{
    res.json("hello farhan");
})

app.listen(process.env.API_PORT,'localhost', ()=>{
    console.log("server is running")
   

});

if(process.env.API_PORT){
    app.listen(process.env.API_PORT);
}

module.exports=app;