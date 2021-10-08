const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    school: { type: String},
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("student", studentSchema);