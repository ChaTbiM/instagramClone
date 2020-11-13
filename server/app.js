const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000; 


const posts = require('./factory')

app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.get('/posts',(req,res)=>{
    res.status(200).json(posts);
})



app.listen(port,()=>{
    console.log(`example app is listening on port: ${port}`)
})