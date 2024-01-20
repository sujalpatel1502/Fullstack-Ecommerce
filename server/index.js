import express from 'express';
import  {Connection}  from './database/db.js';
import DefaultData from './default.js';
import dotev from 'dotenv'
import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const app=express();
dotev.config();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router);
const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);


app.listen(PORT,()=>{
    console.log("server in running");
})

DefaultData();