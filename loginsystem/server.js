const bodyParser = require('body-parser');
const express=require('express')
const path =require('path')
const session =require('express-session')
const {v4:uuidv4}=require('uuid')

const router=require('./router')

const app=express();

const port=3000;


app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))


// for axcessing static files
app.use('/static',express.static(path.join(__dirname,"public")))
app.use( "/assests",express.static(path.join(__dirname,"public/assests")))


app.use('/router',router);


app.get('/',(req,res)=>{
    res.render('../loginsystem/views/base');
})



app.listen(port, ()=>{console.log("listening to the server 3000")})

