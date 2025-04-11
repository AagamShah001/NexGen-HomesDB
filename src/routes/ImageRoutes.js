const routes = require("express").Router()

const ImgController = require("../controllers/ImageController")

routes.post("/addimg",ImgController.addImg)
routes.get("/imgs",ImgController.getAllImg)
routes.get("/img/:id",ImgController.getImgById)
routes.get("/imgbyuserid/:userid",ImgController.getImgByuserId)

module.exports = routes 