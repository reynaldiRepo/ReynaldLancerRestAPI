const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema({
    "_id":{
        type:String
    },
    "nama":{
        type:String
    },
    "alamat":{
        type:String,
        default:""
    },
    "no_telephone":{
        type:String
    },
    "password":{
        type:String
    },
    "ratting":{
        type:Number,
        default:0
    },
    "saldo":{
        type:Number,
        default:0
    }

})



module.exports = mongoose.model("user", user);