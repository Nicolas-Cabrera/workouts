const express = require('express');
const mongoose = require('mongoose');

const db = require('./dbconnection');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../../build')));

app.listen(port, () => console.log(`This is port ${port}!`));

app.post('/formAction', (req, res) => {
	console.log('Request body is ', req.body);
	res.send(req.body.age);
})

//app.get('/', (req, res) => res.send('Hello welcome to the backend!!'));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
