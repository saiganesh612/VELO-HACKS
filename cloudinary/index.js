const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name: process.env.Cloudinary_Cloudname,
    api_key: process.env.Cloudinary_Api_Key,
    api_secret: process.env.Cloudinary_Api_Secret
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "VeloHacks",
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
})

module.exports = { cloudinary, storage }
