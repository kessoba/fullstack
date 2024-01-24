const User=require('../models/UsersModel')
const jwt=require('jsonwebtoken');
require("dotenv").config();
const secretKey= process.env.JWT_SECRET;
// foncton for registerd
async function registerUser(req,res){

    let{Name,email,password} = req.body;

    try{
        const duplicate = await User.find({email});
        if(duplicate && duplicate.length > 0) {
            return res.status(400).send({message:"User already registered with this email"}); }

            let newUser =new User({Name,email,password});
            let result = await newUser.save();
            console.log(result)
        res.status(201).send({message:" User registerd successfull "});
     

    }catch(err) {
        console.log(err)
        res.status(400).send(err);

    } 
}
// fonction for login
async function loginUser(req,res){
    
    try{
      const {email,password}= req.body;
      const user= await User.findOne({email});
      if(!user){
        return res.status(404).send({err:"Authentication failed"})
      }
      const isPasswordValid= await user.comparePassword(password);
      if(!isPasswordValid){
        return res.status(404).send({err:"Password s not valid"})
      }
      let token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1h' });
      let finalData ={
        userId:user?._id,
        Name:user?.Name,
        email:user?.email,
        token
      }
      res.send(finalData);
    }catch(err) {
        console.log(err)
        res.status(400).send(err)

    }
}



const AuthController={
    registerUser,
    loginUser
}
module.exports = AuthController