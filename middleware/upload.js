const multer = require("multer");
const {CLoudinaryStorage} = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "e-commerce_products",
        allowedFormats: ["jpg", "png", "jpeg"],
    },
});
 
module.exports = multer({ storage });