const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')
const app = express();
const port = 1080;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));


app.get("/", (req, res) => {
    res.send("hhhhh");
})

app.listen(port, () => {
    debug('[node]' + ' listening' + port);
})
