const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://faizanfzk:faizan123@cluster0.8dhd0.mongodb.net/Unit4C3?retryWrites=true&w=majority")
}