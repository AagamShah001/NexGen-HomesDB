const routes = require("express").Router()
const userController = require("../controllers/UserController")

routes.post("/adduser",userController.signup)
routes.get("/users",userController.getAllUsers)
routes.get("/user/:id",userController.getUserById)
routes.delete("/user/:id",userController.deleteUserById)
routes.post("/login",userController.loginUser)

module.exports = routes 