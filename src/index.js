const express=require("express")
const login=require("./controller/aut.controller")
const userController=require("./controller/user.controller");
const bookController=require("./controller/book.controller")
const commentController=require("./controller/comment.controller")

app.use(express.json());

app.use("/users",userController)
app.use("/books",bookController)
app.use("/comments",commentController)

app.post("/login",login)

module.exports=app;

