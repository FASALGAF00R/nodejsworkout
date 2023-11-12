const express=require('express')
const path=require('path')
const fs=require('fs')
const app=express();


const port=3000

// middleware to log requests
app.use(function(req,res,next){
    console.log("request date: " + new Date() );
    next();
})

// Middleware to serve static files from the 'static' directory

app.use(function (req,res,next){
    console.log("fgfg");
    var filepath=path.join(__dirname,"static",req.url);
    console.log(filepath,"l");
    fs.stat(filepath,function(err,fileinfo){
        if(err){
            console.log("ggg");
            next();
            return
        }
        if(fileinfo.isFile()){
            console.log("file found");
            res.sendFile(filepath);
        }else{
            console.log("not found");
            next();
            
        }
        
    })
})



app.use((req,res)=>{
    res.status(404);
    res.send("file nto found")
})


app.listen(port,()=>{console.log("port running")})