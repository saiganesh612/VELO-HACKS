const express = require("express")
const router = express.Router()
const Comment = require("../models/comment")
const Hackathon = require("../models/hackathon")
const Requirement = require("../models/requirement")

router.get("/get-feed", async (req, res) => {
    try {
        const feed = await Hackathon.find({});
        res.status(200).json({ message: "Retrived", feed: feed.reverse() })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

router.get("/get-team-feed", async (req, res) => {
    try {
        const teamFeed = await Requirement.find({});
        res.status(200).json({ message: "Retrived", feed: teamFeed.reverse() })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

router.get("/get-project/:projectId", async (req, res) => {
    const { projectId } = req.params
    try {
        const project = await Hackathon.findOne({ _id: { $eq: projectId } })
        if (!project) throw "Their is no project associated with this id."
        const comments = await Comment.find({ $and: [{ hackathon_id: { $eq: projectId } }, { isReplied: false }] })
            .populate({ path: "subComments", model: "Comment" })
        res.status(200).json({ message: "Retrived", project, comments: comments.reverse() })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
})

module.exports = router
