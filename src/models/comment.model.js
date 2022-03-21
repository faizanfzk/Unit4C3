const mongoose=require("mongoose")

const commentSchema=new mongoose.Schema({
    body:{
        type:{type:String,required:true}
    },
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user",
       required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

const Commment=mongoose.model("comment",commentSchema)

module.exports=Comment;