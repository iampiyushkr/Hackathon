// // const jwt = require("jsonwebtoken");
// // require("dotenv").config()

// const User = require("../models/user.model");

// // const newToken = (user) => {
// //     return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
// // }

// const signup = async (req, res) => {
//     let user;
//     try {
//         user = await User.findOne({ email: req.body.email }).lean().exec()
//         if (user) return res.status(400).send({ status: "failed", message: "This email id is already registered." })
//         user = await User.create(req.body)
//         res.status(200).json({ user });
//     } catch (err) {
//         if (!user) return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
//     }
// }

// const login = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email }).exec();
//         if (!user) return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
//         if (user.password === req.body.password) {
//             return res.status(200).json({ user });
//         }
//         return res.status(400).send({ status: "failed", message: "Invalid Credentials" });
//     } catch (err) {
//         return res.status(500).send({ status: "failed", message: "Oops! Something went wrong. Please try again after some time." });
//     }
// }

// module.exports = { signup, login }