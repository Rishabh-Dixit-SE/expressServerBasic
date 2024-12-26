import express from "express";
import "dotenv/config";

const app=express();

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/about",(req,res)=>{
    res.send("hello about");
})

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`));