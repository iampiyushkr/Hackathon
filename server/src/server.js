const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connect = require("./configs/db");

const studentController = require("./controllers/student.controller")
const mentorController = require("./controllers/mentor.controller")

app.use("/students", studentController);
app.use("/mentors", mentorController);

app.listen(2367, async function () {
    await connect();
    console.log("Listening to Port 2367");
})