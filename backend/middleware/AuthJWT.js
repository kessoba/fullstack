const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;
require('dotenv').config();

const AuthenticateToken = async  (req,res,next)=>{
    let token = req-Headers('Authorization');
    if(!token)return res.status(401).send({message:"Authentication Failed"});
    jwt.verify(token,secretKey,(err,user)=>{
       if (err) return res.status(403).send({message:"Token is not failed! Please login Again"});
       req.user=user;
       next();
    })
}
module.exports= AuthenticateToken