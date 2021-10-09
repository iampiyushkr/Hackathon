const { model, Schema } = require("mongoose");

const chatSchema = new Schema(
  {
    body: { type: String, required: true },
    id: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Chat = model("chat", chatSchema);

module.exports = Chat;
