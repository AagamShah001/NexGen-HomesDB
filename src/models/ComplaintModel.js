const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String,
        enum: ['Open', 'Pending', 'Closed'], 
        default: 'Open',                   
      }
},{
    timestamps: true
})
module.exports = mongoose.model('Complaint', complaintSchema); 