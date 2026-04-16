import mongoose, { Schema } from "mongoose";

const employeeschema = new Schema({
    Name: { type: String, required: true }, Age: { type: Number, required: true }, Designation: { type: String, required: true }, Salary: { type: Number, required: true }
})

const employee = mongoose.model("Employee", employeeschema)
export default employee