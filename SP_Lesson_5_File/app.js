const express = require("express");
const app = express();
const upload = require('express-fileupload');
const handlerFunc = require('./handler');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/handle/text/", (req, res) => {
    handlerFunc(JSON.stringify(req.body.text));
    res.send(req.body);
});

app.post('/handle/file/', (req, res) => {
    if (req.files.upfile) {
        var file = req.files.upfile,
            name = file.name;
        var uploadpath = __dirname + '/uploads/' + name;
        file.mv(uploadpath, function (err) {
            if (err) {
                console.log("File Upload Failed", name, err);
                res.send("Error Occured!")
            }
            else {
                console.log("File Uploaded", name);
                res.send('Done! Uploading files')
            }
        });
    }
    else {
        res.send("No File selected !");
        res.end();
    }
});

app.listen(80, function () {
    console.log('Start Port:80');
});


// let file_read = fs.readFileSync('t1.txt', 'utf-8');
// const message = "Hello World" + file_read;
// fs.writeFileSync('some_new_file.txt', message);
// fs.readFile('t1.txt', {encoding: 'urf-8'}, function (err, data) {
//     if(err) throw err;
// });