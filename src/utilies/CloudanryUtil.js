const cloundinary = require("cloudinary").v2;


const uploadFileToCloudinary = async (file) => {

    //conif
        cloundinary.config({
        cloud_name:"dejt2cnwh",
        api_key:"918437845636118",
        api_secret:"Q-lEKAYkUj56hE3113eXIb2r-LA"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;



};
module.exports = {
    uploadFileToCloudinary
}