const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    imgId:{
        type:Schema.Types.ObjectId,
        ref:"Img",
        required: true,
        unique:true,
    },
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property", 
        required: true,
      },
},{
    timestamps: true
})
module.exports = mongoose.model('wishlist', wishlistSchema); 