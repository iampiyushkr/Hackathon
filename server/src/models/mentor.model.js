const mongoose = require("mongoose");
const mentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("mentor", mentorSchema);