const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({

    name:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String,
        required: true
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"State",
        required: true
    },
    cityId:{
         type:Schema.Types.ObjectId,
         ref:"City",
         required: true
     },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"Area",
        required: true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    pincode:{
        type: Number,
        required: true                                                              
    },
    description:{
            type:String,
            required: true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required: true
    },
    basePrice:{ 
        type:Number,
        required: true 
    }, 
    bedrooms:{
        type:Number,
        required: true
    },
    bathrooms:{
        type:Number,
        required: true
    }, 
    furnishingStatus:{
        enum:['Furnished', 'Semi-Furnished', 'Unfurnished'],
        type: String,
        required: true
    },
    yearBuilt:{
        type:Date,
        required: true
    },
    status:{
        enum: ['For Sale','Sold'],
        type: String,
        required: true
    },
    Amenities:{
 
        enum:[],
        type: [String],
},
    size:{
        type: String,  
    },
    subcategoryId:{
        type:Schema.Types.ObjectId,
        ref:"SubCategory",
        required: true
    }

},{ 
    timestamps: true
})
module.exports = mongoose.model('Property', propertySchema);