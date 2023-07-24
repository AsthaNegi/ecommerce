import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
// writing extension is necessary in the case of backend 
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Router);  // using the routers to include all the routes in the server side 

const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);// connection is established with database

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);// server is running
});

DefaultData();// data is added in database 