const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    senderId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    receiverId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    message:{
        type: String,
        required: true,
    },
    isRead:{
        type:Boolean,
        default: false
    },
    link:{
        type: String,
    }
    
},{
    timestamps: true
})
module.exports = mongoose.model('notification', notificationSchema); 