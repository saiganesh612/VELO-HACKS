const mongoose = require("mongoose");

const hackathonSchema = new mongoose.Schema({
    username: String,
    hackathon_name: String,
    organiser: String,
    date: Date,
    detailed_desc: String,
    brief_desc: String,
    theme: String,
    stack: String,
    repo_link: String,
    youtube_link: String,
    team: [
        {
            _id: false,
            name: String,
            linkedinUrl: String
        }
    ]
})

module.exports = mongoose.model("Hackathon", hackathonSchema);
