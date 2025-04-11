const ReviewModel = require("../models/ReviewModel");

const addReview = async (req, res) => {
  try {
    const savedReview = await ReviewModel.create(req.body);
    res.status(201).json({
      message: "Review added successfully",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

const getallRate = async(req, res) =>{

  const calculateAverageRatings = async () => {
    try {
      const result = await ReviewModel.aggregate([
        {
          $group: {
            _id: "$propertyId",  // Group by propertyID
            averageRating: { $avg: "$rate" }, // Calculate average rating
            totalReviews: { $sum: 1 } // Count number of reviews
          }
        }
      ]);
  
      return result;  // Return aggregated data
    } catch (error) {
      console.error("Error calculating average ratings:", error);
      throw error;
    }
  };

  try{
    const Review =  await calculateAverageRatings();

    if (Review.length === 0) {
      return res.status(404).json({
        message: "No reviews found for this property",
      });
    }

    res.status(200).json({
      message: "Rate found",
      data: Review,
    });
  }
  catch (err) {
    res.status(500).json({
      message: "Rate  not found",
    });
  }
};

const getAllReviewsbypropertyId = async (req, res) => {

  const propertyId = req.params.propertyid;

    try{
        
        const Reviews = await ReviewModel.find({ propertyId }).populate("userId");
        console.log(Reviews)
        res.status(200).json({
            message: "All Reviews fetched successfully",
            data: Reviews,
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

const getAllReviews = async (req, res) => {

  const propertyId = req.params.propertyid;

    try{
        
        const Reviews = await ReviewModel.find().populate("userId");
        console.log(Reviews)
        res.status(200).json({
            message: "All Reviews fetched successfully",
            data: Reviews,
        })

    }catch(err){

        res.status(500).json({
            message: err
        })

    }

}

const getratebypropertyid = async (req, res) => {
  
    const propertyId = req.params.propertyid;

    const calculateAverageRatings = async () => {
      try {
        const totalReviews = await ReviewModel.countDocuments({ propertyId: propertyId });

          const result = await ReviewModel.aggregate([
              
              {
                  $group: {
                      _id: propertyId,
                      averageRating: { $avg: "$rate" },
                      
                  }
                  
              }
          ]);
            
          const averageRating = result.length > 0 ? result[0].averageRating : 0;

          return {
            _id: propertyId,
            averageRating: averageRating,
            totalReviews: totalReviews
          };

      } catch (error) {
          console.error("Error calculating average ratings:", error);
          throw error;
      }
  };

  
    try {
        const Review = await calculateAverageRatings();
        
        if (!Review || Review.totalReviews === 0) {
            return res.status(404).json({
                message: "No reviews found for this property",
                data: Review
            });
        }

        res.status(200).json({
            message: "Rate found",
            data: Review
        });
    } catch (err) {
        console.error("Error fetching ratings:", err);
        res.status(500).json({
            message: "Rate not found",
            error: err.message
        });
    }
};




module.exports = {
    addReview,
    getAllReviewsbypropertyId,
    getAllReviews,
    getallRate,
    getratebypropertyid
}