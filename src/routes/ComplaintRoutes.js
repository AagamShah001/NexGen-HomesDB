const routes = require('express').Router();
const ComplaintController = require('../controllers/ComplaintController');

routes.post("/addcomplaint", ComplaintController.addComplaint);
routes.get("/getallcomplaint", ComplaintController.getAllComplaint);
routes.get("/getcomplaintbyid/:userid", ComplaintController.getComplaintById);
routes.delete("/deletecomplaint/:userid", ComplaintController.deleteComplaint);

module.exports = routes;