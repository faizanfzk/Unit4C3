const express=require("express");
const {body,validation}=require("express-validator")
const Book=require("../models/book.model")

const router=express.Router()


router.post("/",body("likes").isNumeric().default(0),body("coverImage").not().isEmpty()
,body("content").not().isEmpty(),async(req,res)=>{
    try {
        const errors=validation(req);
        if(!errors==isEmpty()){
            return res.status(500).send(errors.array())
        }
        const book=await User.create(req.body);
        return res.status(201).send(book)
    } catch (error) {
     return res.status(500).send(error.message)   
    }
})



module.exports=router;