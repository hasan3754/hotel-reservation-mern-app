import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import createError from "../utils/error.js"

const router = express.Router();

//CREATE
router.post("/", createHotel)

//UPDATE

router.put("/:id", updateHotel)

//delete
router.delete("/:id", deleteHotel)

//get
router.get("/:id", getHotel)

//get all

router.get("/", getHotels)

export default router