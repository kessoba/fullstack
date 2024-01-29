const express = require("express");
const HotelController = require ("../controller/HotelController");
const AuthenticateToken = require("../middleware/AuthJWT");
const router = express.Router();

router.post("/createhotel",HotelController.createHotel);
router.get("/get-hotel/:userId",HotelController.getHotels);
// router.delete("/delete-hotel/:id",HotelController.deleteHotel);
// router.patch("/update-hotel/:id", HotelController.updateHotel);

module.exports = router;
