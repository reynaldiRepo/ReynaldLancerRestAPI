const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pendidikan = new schema({
    "user_id":{
        type:String
    },
    "pendidikan":{
        type:String
    },"tingkat":{
        type:String
    }

})



module.exports = mongoose.model("pendidikan", pendidikan);