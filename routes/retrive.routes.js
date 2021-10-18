const express = require("express")
const router = express.Router()
const Hackathon = require("../models/hackathon")
const Requirement = require("../models/requirement")
// const validateUser = require("../middlewares/user.validator")

router.get("/get-feed", /*...validateUser(),*/ async (req, res) => {
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

module.exports = router
