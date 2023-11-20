const express = require('express')
var router = express.Router();

const credential = {
    email: 'fasalgafoor2080@gmail.com',
    password: "12345"
}

const items = [
    { products: "bag", numbers: 10, },
    { products: "pencil", numbers: "5", },
    { products: "box", numbers: '4', },
    { products: "bottle", numbers: '3', },
    { products: "sketch", numbers: '6', },
    { products: "shoe", numbers: '1', },
    { products: "compass", numbers: '9', },
    { products: "rubber", numbers: '3', },
    { products: "chappal", numbers: '47', },
    { products: "pen", numbers: '7', },

]

router.post('/base', (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email;
        res.redirect('/router/homepage')
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




module.exports = router