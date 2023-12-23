const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const app = express();
const port = 1080;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    res.send("hhhhh");
})

app.listen(port, ()=>{
    debug('[node]' + ' listening' + port);
})
