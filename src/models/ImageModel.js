const mongoose = require("mongoose")
const Schema = mongoose.Schema

const imageSchema = new Schema({

    propertyId:{
        type:Schema.Types.ObjectId,
        ref:'Property',
        required: true
    },
    name:{
        type:String,
        required: true
    },
    imgUrl:[] 

},{  
    timestamps: true
})

module.exports = mongoose.model("Img",imageSchema)