const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name: "dvmo9ibtk",
    api_key: "919499559513136",
    api_secret: "lnQULKMIh54YQ_-HjvVR6N-987s"
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "VeloHacks",
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
})

module.exports = { cloudinary, storage }
