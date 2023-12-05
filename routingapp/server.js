const express=require('express')
const bodyParser = require('body-parser')

const app=express()

const route=require('./router')

app.use(bodyParser.urlencoded({extended:false}))
const port=8000


app.use("/api",route)



app.listen(port,()=>{console.log("8000")});