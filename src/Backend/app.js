const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getTest = require('./test');

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });

app.get('/', (req, res) => res.send('Hello welcome to the backend!!'));

app.get('/rest/movies', (req, res) => {
	res.send(getTest());
}); 

app.listen(port, () => console.log(`This is port ${port}!`));
