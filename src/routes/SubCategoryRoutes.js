const routes = require('express').Router();

const SubCategoryController = require('../controllers/SUbCategoryController');
routes.post('/addSubCategory', SubCategoryController.addSubCategory);
routes.get('/getallSubCategory', SubCategoryController.getAllSubCategory);

module.exports = routes;