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

//for model -------------------------------
let user_model = require("../model/user_m");
let skill_model = require("../model/skill_user_m")
let sosmed_model = require("../model/sosmed_m");
let pendidikan_model = require("../model/pendidikan_user_m");

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
    console.log(req.query._id)
    user_model.find({
        "_id": req.query._id
    }).exec(
        (e, data) => {
            if (e) {
                res.json({
                    status: false
                })
            } else {
                res.json(data[0])
            }
        }
    )
})

//update_user
user.post("/user/update", (req, res) => {
    user_model.findByIdAndUpdate({
        _id: req.body._id
    }, req.body).exec(
        (e) => {
            if (e) {
                res.json({
                    "status": false,
                    "msg": e
                });
            } else {
                res.json({
                    "status": true
                });
            }
        }
    )
})


//get user skill
user.get("/user/skill", (req, res) => {
    skill_model.find({
        "user_id": req.query.user_id
    }).exec(
        (e, skill) => {
            if (e) {
                res.json({
                    "status": false
                });
            } else {
                res.json(skill);
            }
        }
    )
})

user.post("/user/add_skill", (req, res) => {
    skill_model.deleteMany({
        "user_id": req.body.user_id
    }).exec(e => {
        if (e) {
            res.json({
                status: false,
                "msg": "failed_delete"
            });
        } else {
            let dataArr = req.body.data.split(',')
            let skills = []
            if (dataArr[0] != "") {
                dataArr.forEach(element => {
                    skills.push({
                        "user_id": req.body.user_id,
                        "skill": element
                    });
                });
                skill_model.insertMany(skills, (e) => {
                    if (e) {
                        res.json({
                            "status": false
                        })
                    } else {
                        res.json({
                            status: true
                        })
                    }
                })
            } else {
                res.json({ status: true })
            }
        }
    })
})

user.post("/user/del_skill", (req, res) => {
    skill_model.findByIdAndDelete({
        "_id": req.body._id
    }).exec(e => {
        if (e) {
            res.json({
                status: false
            });
        } else {
            res.json({
                status: true
            });
        }
    })
})


//for sosmed
user.get("/user/sosmed", (req, res) => {
    sosmed_model.find({ "user_id": req.query.user_id }).exec(
        (e, Usosmed) => {
            if (e) {
                res.json({ status: false });
            } else {
                res.json(Usosmed);
            }
        }
    )
})

user.post("/user/add_sosmed", (req, res) => {
    sosmed_model.create(req.body, e => {
        if (e) {
            res.json({ status: false });
        } else {
            res.json({ status: true })
        }
    })
})

user.post("/user/del_sosmed", (req, res) => {
    sosmed_model.findByIdAndDelete({ "_id": req.body._id }).exec(
        (e) => {
            if (e) {
                res.json({ status: false })
            } else {
                res.json({ status: true })
            }
        }
    )
})

user.post("/user/update_sosmed", (req, res)=>{
    sosmed_model.findByIdAndUpdate({"_id":req.body._id}, {"link_sosmed":req.body.link}).exec(
        e=>{
            if(e){
                res.json({status:false})
            }else{
                res.json({status:true})
            }
        }
    )
})

//for pendidikan route
user.get("/user/pendidikan", (req, res)=>{
    pendidikan_model.find({"user_id":req.query.user_id}).exec(
        (e, pend)=>{
            if(e){
                res.json({status:false})
            }else{
                res.json(pend)
            }
        }
    )
})

user.post("/user/add_pendidikan", (req, res)=>{
    pendidikan_model.create(req.body, (e)=>{
        if(e){
            res.json({status:false})
        }else{
            res.json({status:true})
        }
    })
})

user.post("/user/update_pendidikan", (req, res)=>{
    pendidikan_model.findByIdAndUpdate({"_id":req.body._id}, req.body).exec(
        (e)=>{
            if(e){
                res.json({status:false})
            }else{
                res.json({status:true})
            }
        }
    )
})

user.post("/user/del_pendidikan", (req, res)=>{
    pendidikan_model.findOneAndRemove({"_id":req.body._id}, (e)=>{
        if(e){
            res.json({status:false})
        }else{
            res.json({status:true})
        }
    })
})

user.post("/user/tambah_saldo", (req, res)=>{
    user_model.findByIdAndUpdate({"_id":req.body._id}, {$inc:{"saldo":req.body.jumlah}}).exec(
        e=>{
            if (e){
                res.json({status:false});
            }else{
                res.json({status:true});
            }
        }
    )
})

user.post("/user/tambah_saldo", (req, res)=>{
    user_model.findByIdAndUpdate({"_id":req.body._id}, {$inc:{"saldo": parseInt(req.body.jumlah)}}).exec(
        e=>{
            if (e){
                res.json({status:false});
            }else{
                res.json({status:true});
            }
        }
    )
})


user.post("/user/tarik_saldo", (req, res)=>{
    user_model.findByIdAndUpdate({"_id":req.body._id}, {$inc:{"saldo": -1 * parseInt(req.body.jumlah)}}).exec(
        e=>{
            if (e){
                res.json({status:false});
            }else{
                res.json({status:true});
            }
        }
    )
})


module.exports = user