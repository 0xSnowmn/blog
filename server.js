const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser'),
    posts = require('./api/posts.js')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // logger setup
app.use(bodyParser.json()) // accept applications/json content-type requests
app.use('/api/posts/',posts) // posts api


// run the server
app.listen(5000,() =>{console.log(`Started : http://localhost:5000`)})
