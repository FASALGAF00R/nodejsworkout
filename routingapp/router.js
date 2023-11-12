const express=require('express')
const route=express.Router();
var users=require('./database')



// get method
route.get('/users',(req,res)=>{
    console.log("h");
    res.json({userdata:users})
})

// post method
route.post('/users',(req,res)=>{
    const incoming=req.body
    console.log(incoming,"kkkk");
    users.push(incoming)
    res.json(incoming)
})

// if i need to get some speifci data

route.get('/users/:id',(req,res)=>{
    const usersid=Number(req.params.id);
    console.log(usersid,"o");
    const getdata=users.find((users)=>users.id===usersid)
    console.log(getdata,"ok");
    if(!getdata){
        res.status(500).send('not found')
    }else{
        res.json({userdata:[getdata]})
    }
})

// put method
route.put('/users/:id',(req,res)=>{
    const data=Number(req.params.id);
    const body=req.body;
    console.log(body,"body");
    const user=users.find((users)=>users.id===data)
    console.log(user,"user");
    const index=users.indexOf(user)

if(!user){
    res.status(404).send('not found')
}else{
const update={...users,...body}
users[index]=update
    res.send(update)
}
})


// delete method

route.delete('/users/:id',(req,res)=>{
    const id=Number(req.params.id)
    console.log(id,"id");
    const c=users.filter((users)=>users.id!=id)
    console.log(c,"c");

    if(!c){
        res.status(500).send('noooooooooooo')

    }else{
users=c
res.send(users)
    }

})
module.exports=route