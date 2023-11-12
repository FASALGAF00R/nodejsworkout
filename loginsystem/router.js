const express=require('express')
var router=express.Router();

const credential ={
    email:'fasalgafoor@gmail.com',
    password:"12345"
}



router.post('/base',(req,res)=>{
    if(req.body.email===credential.email&& req.body.password===credential.password){
req.session.user=req.body.email;
 res.redirect('/router/homepage')
    }else{
        res.end('invalid username')
    }
})




router.get('/homepage',(req,res)=>{
    if(req.session.user){
        console.log(req.session.user,"user");
        res.render('../loginsystem/views/homepage',{user:req.session.user})
    }else{
        res.send('unauthorized user')
    }
})


router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send('err')
        }else{
           res.render('../loginsystem/views/base') 
        }
    })
})




module.exports=router