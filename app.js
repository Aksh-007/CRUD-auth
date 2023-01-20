import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();


app.get('/', (req, res) => (
    res.send("<h1>Hello world</h1> ")
));




export default app;