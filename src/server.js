// var express = require('express');
import express from 'express';
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

let app = express();
// connect to database mongo
ConnectDB();

let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get("/test-database", async(req, res) => {
    try {
        let item = {
            userId: "00000",
            contactId: "0000"
        }

        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (err) {
        console.log(err);
    }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(process.env.APP_HOST, process.env.APP_PORT);
});