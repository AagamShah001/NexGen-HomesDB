const PropertyModel = require("../models/PropertyModel");




const addProperty = async(req,res)=>{
         const savedProperty = await PropertyModel.create(req.body)
        res.json({ 
            message:"Property Saved Successfully", 
            data:savedProperty
        })
} 

const getAllProperty = async (req, res) => {
  
  let filter = {};
  filter.cityId ;
  filter.stateId ;
  filter.basePrice;

  try {
    const Property = await PropertyModel.find(filter).select('name basePrice stateId cityId areaId createdAt').populate("stateId cityId areaId");
    if (Property.length === 0) {
      res.status(404).json({ message: "No Property found" });
    } else {
      res.status(200).json({ 
        message: "Property found successfully",
        data: Property,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 const getPropertyByUserId = async (req, res) => {
  
  try {
    const property = await PropertyModel.find({userId:req.params.userId}).populate("stateId cityId areaId userId");
    if (property.length === 0) {
      res.status(404).json({ message: "No Property found" });
    } else {
      res.status(200).json({
        message: "Property found successfully",
        data: property,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPropertyById = async (req, res) => {
  
  try {
    const property = await PropertyModel.findById(req.params.id).populate("stateId cityId areaId userId");
    if (property.length === 0) {
      res.status(404).json({ message: "No Property found" });
    } else {
      res.status(200).json({
        message: "Property found successfully",
        data: property,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProperty = async (req, res) => {


  try {
    const updatedProperty = await PropertyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Property updated successfully",
      data: updatedProperty,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while update Property",
      err: err,
    }); 
  }
};


module.exports = {getAllProperty,getPropertyByUserId,updateProperty,addProperty,getPropertyById};