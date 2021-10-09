const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
  },
});
// const cors = require("cors");

// app.use(cors());

io.on("connection", (socket) => {
  socket.emit("your id", socket.id);
  socket.on("send message", (body) => {
    io.emit("message", body);
  });
});

// server.listen(8000, () => console.log("server is running on port 8000"));
