const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
    username: String,
    hackathon_name: String,
    organiser: String,
    date: Date,
    theme: String,
    stack: String,
    requirement: String,
})

module.exports = mongoose.model("Requirement", requirementSchema)
