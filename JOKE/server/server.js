import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
const port=5000;

app.use(express.static("public"));
app.use(bodyParser.json())
let URL="https://v2.jokeapi.dev/joke/";


 app.get("/api",async(req,res)=>{
    try{
        const response = await axios.get(URL+`Any`);
        const result = response.data;
        res.send([result]);
        
    } catch (error){
        console.error("failed to make request:",error.message);
    }

} )



app.get("/api/login",async(req,res)=>{
    console.log(req.query.userId)
    try{
        const response = await axios.get(URL+req.query.userId);
        const result = response.data;
        console.log
        res.send([result]);
        
    } catch (error){
        console.error("failed to make request:",error.message);
    }

} )


app.listen(5000,()=>{console.log(`running on port ${port}`)})