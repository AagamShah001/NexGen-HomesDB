const notificationModel = require("../models/NotificationModel");

const createnotification = async (req, res) => {
  try {
    const notify = await notificationModel.create(req.body);
    res.status(201).json({
      message: "notify created successfully",
      data: notify,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getnotificationbyreceiverid = async(req, res) =>{
  try{
    const notify = await notificationModel.find({receiverId:req.params.receiverId});
    res.status(200).json({
      message: "notify found",
      data: notify,
    });
  }
  catch (err) {
    res.status(500).json({
      message: "notify  not found",
    });
  }

};

const notifyread = async (req, res) => {


  try {
    const markread = await notificationModel.updateMany(
      { receiverId: req.params.id, isRead: false },
      { $set: { isRead: true } }
    );
    res.status(200).json({
      message: "notify is read",
      data: markread,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while update notify",
      err: err,
    }); 
  }
};

const deletenotificationbyreceiverid = async (req, res) => {
  const { receiverId, Id } = req.params;
  try {
    await notificationModel.findOneAndDelete({ _id: Id, receiverId });
    res.status(200).json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting notification' });
  }
};


module.exports = { createnotification,getnotificationbyreceiverid,notifyread,deletenotificationbyreceiverid};