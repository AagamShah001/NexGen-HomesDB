const routes = require('express').Router();
const ReviewController = require('../controllers/ReviewController');

routes.post("/addReview", ReviewController.addReview);
routes.get("/Rate", ReviewController.getallRate);
routes.get("/getallReviews/", ReviewController.getAllReviews);
routes.get("/getallReviews/:propertyid", ReviewController.getAllReviewsbypropertyId);
routes.get("/getratebypropertyid/:propertyid", ReviewController.getratebypropertyid);

module.exports = routes;