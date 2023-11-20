
const express=require('express')
const path=require('path')
const fs=require('fs');
const app=express();
const Token=require('./md/token')
const Validating =require('./md/valid')
const port=3000

app.use(date)

const middleware=[Token,Validating]

app.get('/',middleware,(req,res)=>{
    console.log("commed");
    res.send('hi bro')

} )

app.get("/profile",date,(req,res)=>{
    console.log("profile");
    res.send("<h1>ajsgd</h1>")
})



 function date (req,res,next){
console.log(new Date());
next()
}






// app.get('/',(req,res)=>{
// const File=path.join(__dirname,"fasalu.txt")
// fs.readFile(File,(err,data)=>{
// if(err){
// console.error('error reading file',err)
// res.status(500).send("jghkfndhg")
// }else{
//     console.log("read content",data);

// const newdata=data + "\n gbjgbjxbbjxjb"
// console.log(newdata,"iiiii");
// fs.writeFile(File,newdata,(Err)=>{
//     if(Err){
//         console.error('Error writing to file:', writeErr);
//         res.status(500).send('Internal Server Error');

//     }else{
//         console.log('File has been updated successfully.');
//           res.send('File has been updated successfully.',+newdata);  
//     }
// })
// }

// })
// })




 app.listen(port,()=>{console.log(`port ${port} running`)})






// middleware to log requests
// app.use(function(req,res,next){
//     console.log("request date: " + new Date() );
//     next();
// })

// Middleware to serve static files from the 'static' directory

// app.use(function (req,res,next){
//     console.log("fgfg");
//     var filepath=path.join(__dirname,"static",req.url);
//     console.log(filepath,"l");
//     fs.stat(filepath,function(err,fileinfo){
//         if(err){
//             console.log("ggg");
//             next();
//             return
//         }
//         if(fileinfo.isFile()){
//             console.log("file found");
//             res.sendFile(filepath);
//         }else{
//             console.log("not found");
//             next();
            
//         }
        
//     })
// })



// app.use((req,res)=>{
//     res.status(404);
//     res.send("file nto found")
// })


