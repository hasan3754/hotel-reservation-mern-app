import express from "express"
import { createHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import createError from "../utils/error.js"

const router = express.Router();

//CREATE
router.post("/", createHotel)

//UPDATE

router.put("/:id", async(req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        res.status(200).json(updatedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
    
})

//delete
router.delete("/:id", async(req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
    
})

//get
router.get("/:id", async(req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
    
})

//get all

router.get("/", async(req, res, next) => {

    const failed = true;

    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
    
})

export default router