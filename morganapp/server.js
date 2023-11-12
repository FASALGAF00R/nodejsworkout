const express=require('express')
const morgan=require('morgan')
const {v4:uuidv4}=require('uuid')
const app=express()


const port=4000

morgan.token('id',function getid(req){
return req.id;
})

app.use(assignid);

app.use(morgan(':id:method:status:url "HTTP/:http-version"'))

app.get('/',(req,res)=>{
    res.send('morgan app')
})


function assignid(req,res,next){
    req.id=uuidv4();
    next();
}



app.listen(port,()=>{console.log('running j 4000')});
