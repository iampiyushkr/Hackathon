const express = require("express");
const Chat = require("../models/chat.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let allchtats = await Chat.find().lean().exec();

    if (!allchtats) {
      return res.status(401).json({
        status: "Error",
        message: "No chats to show, Come again later.",
      });
    }

    return res.status(200).json({ data: allchtats });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed", message: "Something went wrong." });
  }
});

router.post("/", async (req, res) => {
  try {
    let chats = await Chat.create(req.body);

    return res.status(201).json({ data: chats });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed", message: "Something went wrong." });
  }
});

module.exports = router;
