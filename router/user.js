require('dotenv').config()
const express = require("express");
const user = express.Router();
const bodyParser = require('body-parser');
const cryto = require("crypto-js");
// parse application/x-www-form-urlencoded
user.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
user.use(bodyParser.json())

//for test -------------------------------
let user_model = require("../model/user_m");
user.get("/user", (req, res) => {
    user_model.find().exec(
        (e, users) => {
            if (e) {
                res.json({
                    status: false
                })
            } else {
                res.json(
                    users
                )
            }
        }
    )
})
// --------------------------------------------

//for register---------------------------------
user.post("/user/register", (req, res) => {
    user_model.create(req.body,
        (e) => {
            if (e) {
                res.json({
                    status: false
                })
            } else {
                res.json({
                    status: true
                })
            }
        }
    )
})
// end register-----------------------------------

// login--------------------------------------------
user.post("/user/login", (req, res) => {
    console.log(req.body);
    user_model.find({
        "_id": req.body._id,
        "password": req.body.password
    }).exec(
        (e, users) => {
            if (e) {
                res.json({
                    status: false,
                    error: e
                })
            } else {
                if (users.length == 0) {
                    res.json({
                        status: false,
                        msg: "Username Password Salah"
                    })
                } else {
                    res.json({
                        status: true,
                        msg: "sukses",
                        data: users
                    })
                }
            }
        }
    )
})

//get user data
user.get("/user/get", (req, res) => {
    user_model.find({
        "_id": req.query._id
    }).exec(
        (e, data) {
            if (e) {
                res.json({
                    status: false
                })
            } else {
                data.status = true
                res.json({data})
            }
        }
    )
})

//end_login
module.exports = user