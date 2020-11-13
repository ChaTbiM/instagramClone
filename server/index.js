const express = require('express')
const app = express();
const port = 8000; 

const posts = require('./factory')

app.get('/',(req,res)=>{
    res.status(200).json(posts);
})



app.listen(port,()=>{
    console.log(`example app is listening on port: ${port}`)
})