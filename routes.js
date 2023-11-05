const express = require('express');

const router = express.Router();

router
.get('/', (req, res) => {
    const device = req.headers['user-agent'];
    console.log(device)
    res
    .send({"message": device})
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

.get('/user', (req, res) => {
    const data = [
        {
            id: "1221312",
            name: "abcbac",
            desc: "lorem akjwalejawl wkea"
        },
        {
            id: "1221312",
            name: "abcbac",
            desc: "lorem akjwalejawl wkea"
        }
    ];
    res
    .render('user/index', {data})
})

module.exports = router;