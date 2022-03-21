const express=require("express");

const Comment=require("../models/comment.model")
const {body,validation}=require("express-validator")
const router=express.Router()


router.post("/",body("body").not().isEmpty(),async(req,res)=>{
    try {
        const errors=validation(req);
        if(!errors==isEmpty()){
            return res.status(500).send(errors.array())
        }
        const comment=await User.create(req.body);
        return res.status(201).send(comment)
    } catch (error) {
     return res.status(500).send(error.message)   
    }
})



module.exports=router;