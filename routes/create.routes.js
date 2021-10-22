const express = require("express");
const router = express.Router();
const Comment = require("../models/comment")
const Hackathon = require("../models/hackathon")
const Requirement = require("../models/requirement")
const validateUser = require("../middlewares/user.validator")
const multer = require("multer")
const { storage } = require("../cloudinary")
const upload = multer({ storage })

router.post("/create-new-hackathon", ...validateUser(), upload.any(), async (req, res) => {
    const info = req.body;

    try {
        if (!Object.keys(info).length) throw "No information is given."

        const newHack = new Hackathon({
            username: info.username,
            profileImage: info.profileImage,
            hackathon_name: info.Hackerthonname,
            organiser: info.Origaniser,
            date: info.eventDate,
            upload_time: info.uploadTime,
            detailed_desc: info.detailedDescription,
            brief_desc: info.BriefDescription,
            theme: info.projectTheme,
            stack: info.techStack,
            repo_link: info.repolink,
            youtube_link: info.YoutubeLink,
            team: JSON.parse(info.TeamDetails)
        })
        newHack.cover_pic = { url: req.files[0].path, filename: req.files[0].filename }

        await newHack.save();
        res.status(200).json({ message: "Success" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

router.post("/create-new-requirement", ...validateUser(), async (req, res) => {
    const info = req.body
    try {
        if (!Object.keys(info).length) throw "No data is passed."

        const newRequire = new Requirement({
            username: info.username,
            profileImage: info.profileImage,
            hackathon_name: info.Hackerthonname,
            organiser: info.Organizer,
            date: info.eventDate,
            theme: info.projectTheme,
            stack: info.techStack,
            requirement: info.requirements,
            linkedin:info.linkedin
        })
        await newRequire.save()
        res.status(200).json({ message: "Success" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

router.post("/create-new-comment", ...validateUser(), async (req, res) => {
    const info = req.body;
    try {
        if (!Object.keys(info).length) throw "No data is passed."

        const newComment = new Comment({
            username: info.username,
            profile: info.profile,
            hackathon_id: info.hackathon_id,
            comment: info.comment,
            time: info.time
        })
        await newComment.save()

        const comments = await Comment.find({ $and: [{ hackathon_id: { $eq: info.hackathon_id } }, { isReplied: false }] })
            .populate({ path: "subComments", model: "Comment" })
        res.status(200).json({ message: "Success", comments: comments.reverse() });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

router.post("/create-new-subComment", ...validateUser(), async (req, res) => {
    const info = req.body
    try {
        if (!Object.keys(info).length) throw "Data is missing."

        const comment = await Comment.findOne({ _id: { $eq: info.replyTo } })
        if (!comment) throw "Their is comment associated with this reference."

        const newComment = new Comment({
            username: info.username,
            profile: info.profile,
            hackathon_id: info.hackathon_id,
            comment: info.comment,
            time: info.time,
            isReplied: true
        })
        comment.subComments.push(newComment._id)

        await newComment.save()
        await comment.save()

        const comments = await Comment.find({ $and: [{ hackathon_id: { $eq: info.hackathon_id } }, { isReplied: false }] })
            .populate({ path: "subComments", model: "Comment" });
        res.status(200).json({ message: "Success", comments: comments.reverse() });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

module.exports = router;
