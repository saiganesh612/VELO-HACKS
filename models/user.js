const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    socialId: String,
    imageUrl: String,
    email: String,
    fullName: String,
    username: String
})

module.exports = mongoose.model("User", userSchema);
