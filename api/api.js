const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config()
app.use(cors());

app.get('/api/test', (req, res)=>{
    res.json("hello"+Date.now());
})


if(process.env.API_PORT){
    app.listen(process.env.API_PORT);
}

module.exports=app;