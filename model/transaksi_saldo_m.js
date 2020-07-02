const mongoose = require("mongoose");
const schema = mongoose.Schema;

const transaksi = new schema({
    "user_id":{
        type:String
    },
    "jumlah":{
        type:Number
    },
    "status":{
        type:"String",
        default:"PROSES"
    },
    "tanggal":{
        type:String
    }

})
module.exports = mongoose.model("transaksi", transaksi);