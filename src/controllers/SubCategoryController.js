const SubCategoryModel = require("../models/SubCategoryModel");

const addSubCategory = async (req, res) => {
  try {
    const savedSubCategory = await SubCategoryModel.create(req.body);
    res.status(201).json({
      message: "SubCategory added successfully",
      data: savedSubCategory,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }  
};

const getAllSubCategory = async (req, res) => {
  try {
    const SubCategory = await SubCategoryModel.find().select('_id name');
    if (SubCategory.length === 0) {
      res.status(404).json({ message: "No SubCategory found" });
    } else {
      res.status(200).json({
        message: "SubCategory found successfully",
        data: SubCategory,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { addSubCategory, getAllSubCategory };