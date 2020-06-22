require('dotenv').config()
const express = require("express");
const location = express.Router();
const bodyParser = require('body-parser');
const request = require("request");
// parse application/x-www-form-urlencoded
location.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
location.use(bodyParser.json())

location.get("/loc/prov"){
    request("http://dev.farizdotid.com/api/daerahindonesia/provinsi", (e, body)=>{
        if (e){
            res.json({status:false});
        }else{
            res.json(body);
        }
    })
}