import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
import quotes from './quotes.json' assert { type: "json" };



app.get('/', (req, res) => (
    res.send("<h1>Hello world</h1> ")
));

app.get("/quote", (req, res) => {
    res.json(quotes);
});

app.get("/random", (req, res) => {
    let index = Math.floor(Math.random()*quotes.length );
    let quote = quotes[index];
    res.status(200).json({
        sucess:true,
        quote
    });
});




export default app;