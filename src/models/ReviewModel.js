const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true,
    },
    propertyId:{
        type:Schema.Types.ObjectId,
        ref:"Property",
        required: true,
    },
    description:{
        type: String,
        required: true,

    },
    rate:{
        type: Number,
        required: true,
    }

},{
    timestamps: true
});

ReviewSchema.index({ userID: 1, propertyID: 1 }, { unique: true });

module.exports = mongoose.model('Review', ReviewSchema);