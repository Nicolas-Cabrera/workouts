const express = require('express');
const db = require('./dbconnection');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.json());

db.connect().then(dbo => {

	app.get('/', (req, res) => {
		res.send('Hello welcome to the backend of this app');
	});

	app.get('/rest/users', (req, res) => {
		dbo.collection('PersonalData').find({}).toArray((err, results) => {
			if(err) throw err;
			res.send(results);
		});
	});

	app.post('/formAction', (req, res) => {
		console.log('Form object is:', req.body);
		dbo.collection('PersonalData').insertOne(req.body);
	})

	// app.post('rest/storeUser', (req, res) => {
	// 	dbo.collection('PersonalData').insertOne(req.body);
	// });

	app.use(express.static(path.join(__dirname, '../../build')));

	app.listen(port, () => console.log(port));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  	});

})