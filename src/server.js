// var express = require('express');
import express from 'express';
import ConnectDB from "./config/connectDB";
import configViewEngine from './config/viewEngine';
import initRoutes from './routes/web';
import bodyParser from 'body-parser';

let app = express();
// connect to database mongo
ConnectDB();

// config view configViewEngine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({ extended: true }));

// Init all routes;
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(process.env.APP_HOST, process.env.APP_PORT);
});