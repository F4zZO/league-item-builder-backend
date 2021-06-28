const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const port = process.env.PORT || 5000;
const fileItem = __dirname + "/items.json";
const fileChamp = __dirname + "/neu.json";

app.use(express.json());
app.use(cors());

function log(req, res, next) {
    console.log(req.method + " Request at" + req.url);
    next();
}
app.use(log);

app.get("/getItems", function (req, res) {
    fs.readFile(fileItem, "utf8", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    });
});

app.get("/getChamps", function (req, res) {
    fs.readFile(fileChamp, "utf8", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    });
});

var server = app.listen(port, function() {
    console.log("Listening to " + port);
});