const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;
require('dotenv').config();

const AuthenticateToken = async (req, res, next) => {
    let token = req.headers['authorization'];
    jwt.verify(token,secretKey,(err,user) => {
        if (err) return res.status(403).send({message: "Token is not valid! Please login again"});
        req.user = user;
        next();
    })
}

module.exports = AuthenticateToken;
