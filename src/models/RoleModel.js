const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    

    name:{
        type:String,
        unique: true
    },
    description:{
        type:String
    }

}) 

module.exports = mongoose.model("roles",roleSchema)
