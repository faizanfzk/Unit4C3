const User=require("../models/user.model");

const login=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email})
if(!user){
    return res.status(500).send({error:"wrong email "})
}
    return true;
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports=login;