import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid";

import Connection from "./database/db.js";
// writing extension is necessary in the case of backend 
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app=express();

dotenv.config();

//using cors
app.use(cors());
//using body parser
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//routing
app.use("/",Router);  // using the routers to include all the routes in the server side 

//using .env variables 
const USERNAME=process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);// connection is established with database

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);// server is running
});

DefaultData();//products  data is added in database 

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams["MID"]=process.env.PAYTM_MID;
paytmParams["WEBSITE"]=process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"]=process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"]=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"]=uuid();
paytmParams["CUST_ID"]=process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"]="1";
paytmParams["CALLBACK_URL"]="http://localhost:8000/callback";
paytmParams["EMAIL"]="asthanegi61@gmail.com";
paytmParams["MOBILE_NO"]="1234567890";


