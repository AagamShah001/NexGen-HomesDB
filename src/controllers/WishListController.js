const wishlistModel = require("../models/wishlistModel");

const addwishlist = async (req, res) => {
  try {
    const savedwishlist = await wishlistModel.create(req.body);
    res.status(201).json({
      message: "wishlist added successfully",
      data: savedwishlist,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getwishlistByuserId = async(req, res) =>{
  try{
    const wishlist = await wishlistModel.find({userId:req.params.userId}).populate("propertyId imgId");
    res.status(200).json({
      message: "wishlist found",
      data: wishlist,
    });
  }
  catch (err) {
    res.status(500).json({
      message: "wishlist  not found",
    });
  }

};

const deletewishlistBypropertyId = async (req, res) => {

  const { userId } = req.query;
  const { propertyId } = req.params

  try {
    const deleted = await wishlistModel.findOneAndDelete({ userId, propertyId });
    if (!deleted) {
      return res.status(404).json({ message: "No wishlist item found for the given property and user." });
    }

    res.json({
      message: "Wishlist deleted successfully.",
      data: deleted
    });
  } catch (err) {
    console.error("Error deleting wishlist:", err);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = { addwishlist,getwishlistByuserId,deletewishlistBypropertyId};