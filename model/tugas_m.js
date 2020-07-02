const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tugas = new schema({
    "user_id":{
        type:String
    },
    "kategori":{
        type:String
    },
    "judul":{
        type:String
    },
    "deskripsi":{
        type:String
    },
    "image":{
        type:String
    },
    "mulai":{
        type:String
    },
    "selesai":{
        type:String
    },
    "upah":{
        type:String
    }

})
module.exports = mongoose.model("tugas", tugas);