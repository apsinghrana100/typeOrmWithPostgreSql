
//  import express from 'express';
const express = require("express")
 import bodyparser from "body-parser";
 import "reflect-metadata";
 const database = require('./src/index.ts')


  const app =express();
 app.use(express.json());
 app.use(bodyparser.json())

const clientRouter = require('./src/routes/create_clients')
const bankerRouter = require('./src/routes/creat_banker')
const transaction = require('./src/routes/transaction');

 
app.use("/",clientRouter);
app.use("/",bankerRouter);
app.use("/",transaction)

const databaseServer= async()=>{
    await database.main();
    app.listen(4000,()=>{
        console.log("server is running on port number 4000" );
    })
};
databaseServer();


// "express": "github:types/express",
//  "express": "^4.17.1",