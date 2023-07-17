const bodyParser = require('body-parser');
const fs = require('fs');
const { default: mongoose } = require('mongoose');
const ejs = require('ejs');
const express = require('express');
const multer = require('multer');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/products.html');
});

app.get('/male', (req, res) => {
    res.sendFile(__dirname + '/male.html');
});


const port = 3000;
const ipAddress = '192.168.0.104';

app.listen(port, ipAddress, () => {
  console.log(`Server running at http://${ipAddress}:${port}/`);
});