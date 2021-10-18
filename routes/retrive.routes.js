const express = require("express")
const router = express.Router()
const Hackathon = require("../models/hackathon")

router.get("/get-feed", async (req, res) => {
    try {
        const feed = await Hackathon.find({});
        res.status(200).json({ message: "Retrived", feed: feed.reverse() })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router
