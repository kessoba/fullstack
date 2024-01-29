const Hotel = require("../models/hotelsModel");

const createHotel = async (req, res) => {
    try {
        const Data = req.body;
        const hotel = new Hotel(Data);
        const result = await hotel.save();
        console.log(result);
        res.status(201).send({ message: "created a new hotel" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
const getHotels = async (req, res) => {
    let { userId } = req.params;
    try {
      
        const result = await Hotel.find({ CreatedBy: userId });
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
};

// const updateHotel = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const data = req.body;
//         const result = await Hotel.findByIdAndUpdate(id, { $set: data }, { new: true });
//         console.log(result);
//         res.status(200).send({ message: "Data updated", result });
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err);
//     }
// };

// const deleteHotel = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await Hotel.findByIdAndDelete(id);
//         console.log(result);
//         res.status(200).send({ message: "Hotel deleted", result });
//     } catch (err) {
//         console.log(err);
//         res.status(400).send(err);
//     }
// };

const HotelController = {
    createHotel,
     getHotels,
    // updateHotel,
    // deleteHotel
};

module.exports = HotelController;
