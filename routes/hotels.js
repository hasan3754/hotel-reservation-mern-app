import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import createError from "../utils/error.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE

router.put("/:id",verifyAdmin, updateHotel)

//delete
router.delete("/:id",verifyAdmin, deleteHotel)

//get
router.get("/:id", getHotel)

//get all

router.get("/", getHotels)

export default router