const ImgModel = require("../models/ImageModel")
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utilies/CloudanryUtil");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).array("imgUrl",7); 
 

const addImg = async(req,res)=>{ 
            
    upload(req, res, async (err) => {
      console.log(req.files) 
        if (err) { 
          res.status(500).json({
            message: err.message,
          });
        }else {
      
            //const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
            //req.body.ImgURL = cloundinaryResponse.secure_url;
            
            
            req.body.imgUrl = req.files.map(file => file.path);
            const savedImg = await ImgModel.create(req.body);

            res.status(200).json({  
              message: "Image saved successfully",
              data: savedImg
            });
          }
})
}

const getAllImg = async(req,res)=>{

    const imgs = await ImgModel.find().populate({path:"propertyId", select:"name basePrice stateId cityId", populate: {path:'stateId cityId', select:'name'}});
    res.json({
        message:"Image fetched successfully..",
        data:imgs
    })
}

const getImgById = async(req,res)=>{

console.log(req.params.id)
  try{
    const img = await ImgModel.findById(req.params.id).populate({path:"propertyId", select:"name Amenities description basePrice stateId cityId userId", populate: {path:'stateId userId cityId', select:'name firstname'}});
    if(img == null){  
      res.json({
        message:"Image Not Found..",
        data:img 
      })
    }else{
      res.json({
        message:"Image fetched successfully..",
        data:img
      })
    }
    
  }catch(error){
    res.json({
      message:"Error",
      data:error
    })
  }}

  const getImgByuserId = async(req,res)=>{

    try{
      const userId = req.params.userid;
      const img = await ImgModel.find(req.params.id).populate({path:"propertyId", populate: {path:'stateId areaId userId cityId', select:'name firstname'}});
       
      const filteredImgs = img.filter(img => 
        img.propertyId && img.propertyId.userId && img.propertyId.userId._id.toString() === userId);

      if(img == null){  
        return res.json({
          message:"Image Not Found..",
          data:[] 
        })
      }

        return res.json({
          message:"Image found",
          data:filteredImgs
        })
      
      
    }catch(error){
      return res.json({
        message:"Error",
        data:error
      })
    }
  

}

 
module.exports = {
    addImg,getAllImg,getImgById,getImgByuserId
  };