const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.post("/update-user-details", async (req, res) => {
    try {
        const { profileObj } = req.body.userObj;

        const user = await User.findOne({ socialId: { $eq: profileObj.googleId } })
        if (!user) {
            const newUser = new User({
                socialId: profileObj.googleId,
                imageUrl: profileObj.imageUrl,
                email: profileObj.email,
                fullName: profileObj.name,
                username: profileObj.givenName
            })
            await newUser.save();
        }
        res.status(200).json({ message: "Success" });
    } catch (err) {
        res.status(404).send(err);
    }
})

module.exports = router;
