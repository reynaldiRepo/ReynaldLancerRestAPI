
require('dotenv').config()

///initiate app;
const express = require("express");
const app = express()
app.listen(process.env.PORT || 3000, () => {
    console.log("is Connect")
});

app.get("/", (req, res) => {
    res.send("reynaldAPi");
})

//initiate midleware

//body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false // parse application/x-www-form-urlencoded
}))
app.use(bodyParser.json()) // parse application/json

//connect db
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://reynaldi:" + process.env.DB_PWD + "@cluster0-s8oo2.gcp.mongodb.net/reynaldlancer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("DB Connect");
    }
})