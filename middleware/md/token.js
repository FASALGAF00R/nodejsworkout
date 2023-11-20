function Token(req,res,next){
    console.log("creating a token");
//     setInterval(() => {
//         const Token ="1234";
// req.token=token;
//         next()
//     }, 2000);

req.token=true;
next()

}

module.exports=Token