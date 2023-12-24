const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')
const app = express();
const port = 1080;

app.use(morgan('combined'));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {username:"Neww"});
})

app.listen(port, () => {
    debug('[node]' + ' listening' + port);
})
