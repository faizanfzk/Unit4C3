const express=require("express");
const {body,validation}=require("express-validator");

const User=require("../models/user.model")

const router=express.Router()


router.post("/",body("firstName").not().isEmpty().withMessage("name is required").custom(async(value)=>{

if(value.length<3 || value.length>30){
    throw new Error("Invalid length")
}
return true;
}
),body("lastName").custom(async(value)=>{
    
if(value.length<3 || value.length>30){
    throw new Error("Invalid length")
}
return true;

}), body("age").not().isEmpty().withMessage("is required").custom(async(value)=>{
   if(value<1||value>150){
       throw new Error("invalid age")
   }
   return true
}), body("email").isEmail().not().isEmpty().body("profileImages").not().isEmpty(),async(req,res)=>{
    try {
        let errors=validation(req)
        if(!errors.isEmpty()){
            return res.status(500).send(errors.array())
        }
        const user=await User.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
     return res.status(500).send(error.message)   
    }
})



module.exports=router;