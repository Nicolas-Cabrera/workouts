const express = require('express');
const mongoose = require('mongoose');

const db = require('./dbconnection');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, '../../build')));

app.get('/test', (req, res) => {
	res.send('Test');
});

app.get('/', (req, res) => res.send('Hello welcome to the backend!!'));

app.listen(port, () => console.log(`This is port ${port}!`));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
