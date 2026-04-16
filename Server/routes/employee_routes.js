import express from "express";
import { adddata, deletedata, editdata, getdata, getdatabyid } from "../controller/employee_controller.js";

const router = express.Router()
router.post("/addemployee",adddata)
router.get("/getdetails",getdata)
router.delete("/deletedata/:id",deletedata)
router.get("/getemployee/:id",getdatabyid)
router.put("/editemployee/:id",editdata)


export default router
