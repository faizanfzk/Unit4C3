

const app=requires("./index")
const connect=require("./configs/db")

app.listen(5000,()=>{
    try {
        await connect()
        console.log("Listening on port 5000")
    } catch (error) {
       return res.status(500).send(error.message) 
    }
})