const express = require('express');
var router = express.Router();

const credential = {
    email: 'fasalgafoor2080@gmail.com',
    password: "12345"
}

const items = [
    {id:1, products: "bag", numbers: 10, },
    {id:2, products: "pencil", numbers: "5", },
    {id:3, products: "box", numbers: '4', },
    {id:4, products: "bottle", numbers: '3', },
    {id:5, products: "sketch", numbers: '6', },
    {id:6, products: "shoe", numbers: '1', },
    {id:7, products: "compass", numbers: '9', },
    { id:8,products: "rubber", numbers: '3', },
    {id:9, products: "chappal", numbers: '47', },
    {id:10, products: "pen", numbers: '7', },

]


// params url 
router.post('/ll/:id',(req,res)=>{
    const userID=parseInt(req.params.id)
const filteruserdata=items.filter(data=> data.id===userID)
console.log(filteruserdata,"filter");
    res.json( filteruserdata)
})



router.post('/ll',(req,res)=>{
    const query=parseInt(req.query.id)
    const filterbyquery=items.filter(data=> data.id===query)
    res.json( filterbyquery)
})










router.post('/base', (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email;
        res.redirect('/router/homepage')
    }else{
        res.end("unauthorized user")
    } 
})



router.get('/homepage', (req, res) => {
    if (req.session.user) {
        res.render('../loginsystem/views/homepage', { items: items })
    } else {
        res.send('unauthorized user')
    }

})


router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.send('err')
        } else {
            res.render('../loginsystem/views/base')
        }
    })
})

router.get('/cards',(req,res)=>{

    res.render('../loginsystem/views/cards')

})



module.exports = router