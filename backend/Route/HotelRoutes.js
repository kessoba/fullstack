const express= require("express");
const HotelController = require ("../controller/HotelController")
const AuthenticateToken = require("../middleware/AuthJWT");
const router =express.Router();

router.post("/createhotel",HotelController.createHotel);


module.exports= router;