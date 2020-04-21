var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hostname = 'localhost';
var port = 8017;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

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
	  response = {
                first_name: req.query.first_name,
                last_name: req.query.last_name
        }
        console.log(response);
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
