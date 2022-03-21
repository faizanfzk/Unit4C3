const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String,minlength:3,maxlength:30},
    age:{type:Number,min:1,max:150},
    email:{type:String,required:true,unique:true},
    profileImages:[{type:String,required:true}],
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
})
const User=mongoose.model("user",userSchema)

module.exports=User;