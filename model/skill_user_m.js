const mongoose = require("mongoose");
const schema = mongoose.Schema;

const skill = new schema({
    "_id":{
        type:String
    },
    "user_id":{
        type:String
    },
    "skill":{
        type:String
    }

})



module.exports = mongoose.model("skill", skill);