
const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000; 


const {posts,users} = require('./factory')

app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.get('/posts',(req,res)=>{
    let postsData = posts();
    let usersData = users();
    postsData.forEach((el,index)=>{
        el.user = usersData[index]
    })
    res.status(200).json(postsData);
})

app.get('/users',(req,res)=>{
    res.status(200).json(users());
})




app.listen(port,()=>{
    console.log(`example app is listening on port: ${port}`)
})