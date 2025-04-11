const routes = require('express').Router();
const notificationController = require('../controllers/NotificationController');

routes.post("/createnotify", notificationController.createnotification);    
routes.get("/getnotify/:receiverId",notificationController.getnotificationbyreceiverid)
routes.put("/notifyread/:id", notificationController.notifyread);
routes.delete("/deletenotify/:Id/:receiverId", notificationController.deletenotificationbyreceiverid); 


module.exports = routes;  