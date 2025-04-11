const CategoryModel = require("../models/CategoryModel");

const addCategory = async (req, res) => {
  try {
    const savedCategory = await CategoryModel.create(req.body);
    res.status(201).json({
      message: "Category added successfully",
      data: savedCategory,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const Category = await CategoryModel.find();
    if (Category.length === 0) {
      res.status(404).json({ message: "No Category found" });
    } else {
      res.status(200).json({
        message: "Category found successfully",
        data: Category,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { addCategory, getAllCategory };