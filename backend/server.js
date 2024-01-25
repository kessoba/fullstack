const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000 ;
const cors = require("cors");
const AuthRoutes = require("./Route/AuthRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();


app.use(cors());
// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
// Route for authentication
app.use("/api",AuthRoutes );

// Start the server
app.listen(PORT, () => console.log("Le serveur a démarré au port " + PORT));
connectDB();
