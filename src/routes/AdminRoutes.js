const routes = require('express').Router();
const AdminController = require('../controllers/AdminController');
routes.post("/addAdmin", AdminController.addAdmin);
routes.get("/getallAdmins", AdminController.getAllAdmins);
routes.post("/adminlogin", AdminController.loginAdmin);
module.exports = routes;