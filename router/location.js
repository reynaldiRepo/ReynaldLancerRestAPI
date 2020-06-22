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

location.get("/loc/prov", (req, res) => {
    request("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json", (e, body) => {
        if (e) {
            res.json({
                status: false
            });
        } else {
            res.json(JSON.parse(body.body));
        }
    })
})

location.get("/loc/kota", (req, res) => {
    request("http://emsifa.github.io/api-wilayah-indonesia/api/regencies/" + req.query.prov + ".json", (e, body) => {
        if (e) {
            res.json({
                status: false
            });
        } else {
            res.json(JSON.parse(body.body));
        }
    })
})


location.get("/loc/kec/", (req, res) => {
    request("http://emsifa.github.io/api-wilayah-indonesia/api/districts/" + req.query.kab + ".json", (e, body) => {
        if (e) {
            res.json({
                status: false
            })
        } else {
            res.json(JSON.parse(body.body))
        }
    })
})

location.get("/loc/des/", (req, res) => {
    request("http://emsifa.github.io/api-wilayah-indonesia/api/villages/" + req.query.kec + ".json", (e, body) => {
        if (e) {
            res.json({
                status: false
            })
        } else {
            res.json(JSON.parse(body.body))
        }
    })
})

module.exports = location;