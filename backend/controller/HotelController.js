 const createHotel = async (req, res) => {
    try {
        const Data = req.body;
        const Hotel = require("../models/hotelsModel"); // Assurez-vous que le chemin vers le modèle Hotel est correct
        const hotel = new Hotel(Data); // Utilisez le modèle Hotel pour créer une nouvelle instance
        const result = await hotel.save();
        console.log(result); // Corrigez la faute de frappe 'consle' en 'console'
        res.status(201).send({message: "created a new hotel"});
    } catch (err) {
        console.log(err);
        res.status(500).send(err); // Envoyez un code d'erreur HTTP approprié, par exemple 500 pour une erreur interne du serveur
    }
}

const HotelController={
    createHotel
}
module.exports = HotelController;
