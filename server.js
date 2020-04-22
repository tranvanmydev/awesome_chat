// var express = require('express');
import express from 'express';

let app = express();
let bodyParser = require('body-parser');
let hostname = 'localhost';
let port = 8017;

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get("/users", (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

app.delete("/users", (req, res) => {
    res.send(JSON.stringify(response));
});

app.post("/users", urlencodedParser, (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.listen(port, hostname, () => {
    console.log(hostname, port);
});