const express = require("express");
const app = express();
const cors = require("cors");

const connect = require("./configs/db");

app.use(cors());
app.use(express.json());

const studentController = require("./controllers/student.controller");
const mentorController = require("./controllers/mentor.controller");
const blogcontroller = require("./controllers/blog.controller");

app.use("/students", studentController);
app.use("/mentors", mentorController);
app.use("/blogs", blogcontroller);

app.listen(2367, async function () {
  await connect();
  console.log("Listening to Port 2367");
});
