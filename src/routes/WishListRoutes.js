const routes = require('express').Router();
const wishlistController = require('../controllers/WishListController');

routes.post("/addwishlist", wishlistController.addwishlist);    
routes.delete("/deletewishlist/:propertyId", wishlistController.deletewishlistBypropertyId);    
routes.get("/getwishlistbyuserid/:userId",wishlistController.getwishlistByuserId)

module.exports = routes;   