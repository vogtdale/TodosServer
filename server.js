"use strict"

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()
require("./dbConfig")

const apiRoutes = require("./routes/api.js")

// app confiig
const port = process.env.PORT || 8080
const app = express()

//app use middleware
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app routing 
apiRoutes(app)

app.get("/", (req,res) =>  {
    res
    .status(200)
    .send( "<h1>Todos API</h1>")
})

// db connextion

// 404 not found middleware
app.use(function (req, res, next) {
    res.status(404).type("text").send("Not Found");
  });
  
// app listener
app.listen(port, () => {
    console.log(`Your app is listening on port ` + `${port}`);
})


