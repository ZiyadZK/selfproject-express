const express = require('express');
const router = require('./routes');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 8000;

app
.use(express.json())
.set('view engine', 'ejs')

.use(router)

.listen(port, () => {
    console.log(`Server is deployed at port ${port}`)
});

