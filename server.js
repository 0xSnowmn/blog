const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser')

app.use(bodyParser.json()) // accept applications/json content-type requests


app.get('/',(req,res) => {
    res.send("Hello World :D")
})


app.listen(5000,() =>{console.log(`Started : http://localhost:5000`)})
