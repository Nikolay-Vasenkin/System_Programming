const express = require("express");
const app = express();
const upload = require('express-fileupload');
const handlerFunc = require('./handler');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/handle/text/", (req, res) => {
    handlerFunc(JSON.stringify(req.body.text));
    res.redirect('/');
});

app.post('/handle/file/', (req, res) => {
    if (req.files.upfile) handlerFunc(String(req.files.upfile.data));
    res.redirect('/');
});

app.listen(80, function () {
    console.log('Start Port:80');
});