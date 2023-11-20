function Validating(req,res,next){
    if(req.token){
        console.log("validating");
next();
    }else{
        console.log("not token");
        res.send("noooo")
    }
}

module.exports=Validating