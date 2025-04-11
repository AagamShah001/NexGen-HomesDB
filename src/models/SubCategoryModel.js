const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    
    categoryId:{
        type:Schema.Types.ObjectId,
        required: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type:String
    }


},{
    timestamps: true
})
module.exports = mongoose.model('SubCategory', subcategorySchema);