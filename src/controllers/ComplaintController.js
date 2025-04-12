const ComplaintModel = require("../models/ComplaintModel");

const addComplaint = async (req, res) => {
  try {
    const savedComplaint = await ComplaintModel.create(req.body);
    res.status(201).json({
      message: "Complaint added successfully",
      data: savedComplaint,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

const getAllComplaint = async (req, res) => {

    try{
        
        const Complaints = await ComplaintModel.find().populate('userId');
        res.status(200).json({
            message: "All Complaints fetched successfully",
            data: Complaints,
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

const deleteComplaint = async(req,res)=>{

    const deletedComplaint = await ComplaintModel.findByIdAndDelete(req.params.id)

    res.json({
      message:"role deleted successfully..",
      data:deletedComplaint
    })

}

const getComplaintById = async (req,res)=>{

  const Complaint = await ComplaintModel.findById(req.params.id)
  res.json({
    message:"Complaint fetched..",
    data:Complaint
  })

}


module.exports = {
    addComplaint,
    getAllComplaint,
    deleteComplaint,
    getComplaintById,
}