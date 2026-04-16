import express from "express";  
import mongoose from "mongoose";
import cors from "cors";
import employee_routes from "./routes/employee_routes.js"
mongoose.connect("mongodb://localhost:27017/EMP").then(()=>{
    console.log("mongoDB connected successfully")}).catch((error) => {
        console.log("mongoDB connection error.",error)});
const server=express()
server.use(express.json( ))
server.use(cors({origin:" http://localhost:5173"}))
server.listen(5000,()=>{console.log("Server started on port:5000:")})
server.use("/employee",employee_routes)