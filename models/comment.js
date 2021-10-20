const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    username: String,
    hackathon_id: String,
    isReplied: {
        type: Boolean,
        default: false
    },
    comment: String,
    time: Date,
    subComments: [String]
})

module.exports = mongoose.model("Comment", commentSchema)
