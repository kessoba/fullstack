const express= require("express");
const AuthController = require("../controller/AuthController");
const router =express.Router();

router.post("/inscription",AuthController.registerUser);
router.post("/connected",AuthController.loginUser);
router.post("/deconnexion",AuthController.logoutUser);

module.exports=router;