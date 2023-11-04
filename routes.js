const express = require('express');

const router = express.Router();

router
.get('/', (req, res) => {
    res
    .render('home/index')
})

.get('/login', (req, res) => {
    res
    .send({ message: 'GET method is not available'})
    .status(400)
})

.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username == "jeje" && password == "jeje"){
        res
        .send({ data: "sukses login" })
        .status(200)
    }else{
        res
        .send({ data: "gagal login"})
        .send(404)
    }
})

module.exports = router;