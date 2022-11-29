require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// CONNECTION
mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("Home page") 
})

const location=require("./routes/locationRouter")

app.use("/location",location)

// PORT
const port = process.env.PORT || 8000;

// SERVER STARTING
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})
