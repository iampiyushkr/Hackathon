const express = require("express");
const app = express();

const connect = require("./configs/db");

const studentController = require("./controllers/student.controller")
const mentorController = require("./controllers/mentor.controller")

app.use("/students", studentController);
app.use("/students", mentorController);

app.listen(2367, async function () {
    await connect();
    console.log("Listening to Port 2367");
})