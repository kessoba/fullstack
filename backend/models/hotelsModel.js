const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
    NomHotel: {
        type: String,

    },
    email: {
        type: String,
    },
    Adresse: {
        type: String,

    },
    Tel: {
        type: String,

    },
    Prix: {
        type: String,

    },
    Devise: {
        type: String,

    },
    image:{
        type: String,

    },
    CreatedBy: {
        ref: "User",
        type: Schema.ObjectId,
    },
}, {
    timestamps: true
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;
