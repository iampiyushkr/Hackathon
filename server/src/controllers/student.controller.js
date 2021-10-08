const express = require("express");

const router = express.Router();

const Student = require("../models/student.model");


router.post("/signup", async (req, res) => {
    let student;
    try {
        student = await Student.findOne({ email: req.body.email }).lean().exec()
        if (student) return res.status(400).send({ status: "failed", message: "This email id is already registered." })
        student = await Student.create(req.body);
        res.status(200).json({ student });
    } catch (err) {
        console.log(err);
        if (!student) return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
    }
})
router.post("/login", async (req, res) => {
    try {
        let student = await Student.findOne({ email: req.body.email }).exec();
        if (!student) return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
        if (student.password === req.body.password) {
            return res.status(200).json({ student });
        }
        return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
    } catch (err) {
        return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
    }
})

module.exports = router;