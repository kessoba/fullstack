const express = require("express");
const HotelController = require ("../controller/HotelController");
const AuthenticateToken = require("../middleware/AuthJWT");
const router = express.Router();

router.post("/createhotel", AuthenticateToken, HotelController.createHotel);
router.get("/gethotel/:userId", AuthenticateToken, HotelController.getHotels);
router.delete("/delete-hotel/:id", AuthenticateToken, HotelController.deleteHotel);
router.patch("/update-hotel/:id", AuthenticateToken, HotelController.updateHotel);

module.exports = router;
