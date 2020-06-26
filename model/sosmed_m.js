const mongoose = require("mongoose");
const schema = mongoose.Schema;

const sosmed = new schema({
    "user_id":{
        type : String
    },
    "sosmed_type":{
        type : String
    },
    "link_sosmed":{
        type:String
    }

})



module.exports = mongoose.model("sosmed", sosmed);