const mongoose= require("mongoose");
const bcrypt = require('bcrypt')
const {Schema}= mongoose;
const userSchema= new Schema({

    Name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
userSchema.pre("save",async function(next){
    const user = this;
    if(!user.isModified) return next();
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(user.password,salt) ;
    user.password= hash;
    next()
})

userSchema.methods.comparePassword = async function(password){

   return bcrypt.compare(password,this.password) 
}
const user=mongoose.model("User",userSchema)
module.exports= user;