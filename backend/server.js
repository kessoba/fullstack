const express= require("express");
const port = 6000

const connectDB= require("./config/db");

const dotenv= require("dotenv").config();

// app.get("/post" , (req,res)=> {
//     res.json({message:'voici les donnees'})
// connexion a la DB

const app= express();
app.use(express.json());
app.use(express.urlencoded ({ extended: false  }));
// })
app.use("/post",require("./Route/post_routes"));

// lancer le serveur 
app.listen(port, () => console.log("le serveur a Demarer au port" + port) );
connectDB();