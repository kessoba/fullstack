const express = require("express");
const APP = express();
const PORT = process.env.PORT || 5000 ;
const cors = require("cors");
const AuthRoutes = require("./Route/AuthRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();


APP.use(cors());
// Middleware to parse JSON and urlencoded data
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));

// Enable CORS
// Route for authentication
APP.use("/api",AuthRoutes );

// Start the server
APP.listen(PORT, () => console.log("Le serveur a démarré au port " + PORT));
connectDB();
