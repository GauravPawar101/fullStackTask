const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  branch: { type: String, required: true },
  marks: { type: Number, required: true , min: 0, max: 100},
  createdAt: { type: Date, default: Date.now },
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;