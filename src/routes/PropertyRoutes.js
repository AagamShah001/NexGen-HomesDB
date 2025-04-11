const routes = require('express').Router();
const PropertyController = require('../controllers/PropertyController');

routes.get('/getallproperty', PropertyController.getAllProperty);
routes.get('/getpropertybyid/:id', PropertyController.getPropertyById);
routes.get('/getpropertybyuserid/:userId', PropertyController.getPropertyByUserId);
routes.put("/updateproperty/:id", PropertyController.updateProperty);
routes.post("/addproperty", PropertyController.addProperty);

module.exports = routes;