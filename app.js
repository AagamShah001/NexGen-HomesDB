const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const app = express()
app.use(cors()) 
app.use(express.json()) 



const roleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",roleRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes) 

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes) 

const areaRoutes = require("./src/routes/AreaRoutes")
app.use("/area",areaRoutes)
 
const propertyRoutes = require("./src/routes/PropertyRoutes")
app.use("/property",propertyRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",categoryRoutes)

const subcategoryRoutes = require("./src/routes/SubCategoryRoutes")
app.use("/subcategory",subcategoryRoutes)

const imgRoutes = require("./src/routes/ImageRoutes")
app.use("/img",imgRoutes)

const ReviewRoutes = require("./src/routes/ReviewRoutes")
app.use("/review",ReviewRoutes)

const WishListRoutes = require("./src/routes/WishListRoutes")
app.use("/wishlist",WishListRoutes)

const AdminRoutes = require("./src/routes/AdminRoutes")
app.use(AdminRoutes)

const NotifyRoutes = require("./src/routes/NotificationRoutes")
app.use(NotifyRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://127.0.0.1:27017/nexgenhomesDB").then(()=>{
    console.log("database connected")
}) 


const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
}) 