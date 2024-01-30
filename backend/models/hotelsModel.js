const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
    NomHotel: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Adresse: {
        type: String,
        required: true,
    },
    Tel: {
        type: String,
        required: true,
    },
    Prix: {
        type: String,
        required: true,
    },
    Devise: {
        type: String,
        required: true,
    },
    CreatedBy: {
        ref: "User",
        type: Schema.ObjectId,
        required: true,
    },
}, {
    timestamps: true
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;
