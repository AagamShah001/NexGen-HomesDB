//router
const routes = require("express").Router()
//controller --> userController
const userController = require("../controllers/UserController")
//routes.post("/user",userController.addUser)
routes.post("/adduser",userController.signup)
routes.get("/users",userController.getAllUsers)
routes.get("/user/:id",userController.getUserById)
routes.delete("/user/:id",userController.deleteUserById)
routes.post("/login",userController.loginUser)

module.exports = routes 