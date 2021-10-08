const express = require("express");

const router = express.Router();

const Mentor = require("../models/mentor.model");

router.post("/signup", async (req, res) => {
    let mentor;
    try {
        mentor = await Mentor.findOne({ email: req.body.email }).lean().exec()
        if (mentor) return res.status(400).send({ status: "failed", message: "This email id is already registered." })
        mentor = await Mentor.create(req.body)
        res.status(200).json({ mentor });
    } catch (err) {
        if (!mentor) return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
    }
})
router.post("/login", async (req, res) => {
    try {
        let mentor = await Mentor.findOne({ email: req.body.email }).exec();
        if (!mentor) return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
        if (mentor.password === req.body.password) {
            return res.status(200).json({ mentor });
        }
        return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
    } catch (err) {
        return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
    }
})

module.exports = router;