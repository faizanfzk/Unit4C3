const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    likes:{type:Number,default:0},
    coverImage:{type:String,required:true,max:1},
    content:{type:String,required:true},
    publicationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publication",
        required:true
    },
    

},{
    timestamps:true,
    versionKey:false
})

const Book=mongoose.model('book',bookSchema);

module.exports=Book;