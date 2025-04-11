const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({


    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    username:{
        type:String,
    },
    phonenumber:{ 
        type:Number,
    },
    pincode:{
        type:Number,
    },
    Gender:{
        enum: ['male','female'],
        type: String,
    },
    address:{
        type:String,
    },
    stateId:{ 
        type:Schema.Types.ObjectId,
        ref:"State",
    },
    cityId:{
         type:Schema.Types.ObjectId,
         ref:"City",
     },
     dob:{
        type:String,
     },
    roleId:{
        type:Schema.Types.ObjectId, 
        ref:"roles",
        required:true,
    },
    imgUrl:{
        type: String,
    }

},{
    timestamps: true
})

module.exports = mongoose.model("users",userSchema)