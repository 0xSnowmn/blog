const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    apiEndpoints = require('./src/index.js')
    require('dotenv').config(),

mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("DB is connected"));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // logger setup
app.use(bodyParser.json()) // accept applications/json content-type requests
app.use('/api/',apiEndpoints.apiOptions) // posts api


// run the server
app.listen(5000,() =>{console.log(`Started : http://localhost:5000`)})
