const routes = require('express').Router();

const CategoryController = require('../controllers/CategoryController');
routes.post('/addCategory', CategoryController.addCategory);
routes.get('/getallCategory', CategoryController.getAllCategory);

module.exports = routes;