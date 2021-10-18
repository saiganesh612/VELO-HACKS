const express = require("express");
const router = express.Router();
const Hackathon = require("../models/hackathon")

router.post("/create-new-hackathon", async (req, res) => {
    const info = req.body.data;
    try {
        if (!Object.keys(info).length) throw "No information is given"

        const newHack = new Hackathon({
            username: info.username,
            hackathon_name: info.Hackerthonname,
            organiser: info.Origaniser,
            date: info.eventDate,
            detailed_desc: info.detailedDescription,
            brief_desc: info.BriefDescription,
            theme: info.projectTheme,
            stack: info.techStack,
            repo_link: info.repolink,
            youtube_link: info.YoutubeLink,
            team: info.TeamDetails
        })
        await newHack.save();
        res.status(200).json({ message: "Success" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

module.exports = router;
