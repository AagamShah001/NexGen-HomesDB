const AdminModel = require("../models/AdminModel");
const bcrypt = require("bcrypt");

const addAdmin = async (req, res) => {
  try {

          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);
          req.body.password = hashedPassword;
          const savedAdmin = await AdminModel.create(req.body);

    res.status(201).json({
      message: "Admin added successfully",
      data: savedAdmin,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

const getAllAdmins = async (req, res) => {

    try{
        
        const Admins = await AdminModel.find();
        res.status(200).json({
            message: "All Admins fetched successfully",
            data: Admins
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

const loginAdmin = async (req, res) => {
    
  
    const email = req.body.email;
    const password = req.body.password;
  
    const foundUserFromEmail = await AdminModel.findOne({ email: email }).populate("roleId");

    if (foundUserFromEmail != null) {

      const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
   
      if (isMatch == true) {
        res.status(200).json({
          message: "login success",
          data: foundUserFromEmail,
        });
      } else {
        res.status(404).json({ 
          message: "invalid cred..",
        });
      }
    } else {
      res.status(404).json({
        message: "Email not found..",
      });
    }
  };


module.exports = {
    addAdmin,
    getAllAdmins,
    loginAdmin
}