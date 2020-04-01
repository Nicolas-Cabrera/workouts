const express = require('express');
const db = require('./dbconnection');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

//Authentication packages
const session = require('express-session');
const passport = require('passport');
const Two_Hours = 1000 * 60 * 60 * 2;

app.use(express.urlencoded());
app.use(express.json());

db.connect().then(dbo => {

	app.use(express.static(path.join(__dirname, '../../build')));

	app.get('/', (req, res) => {
		res.send('Hello welcome to the backend of this app');
	});

	app.get('/users', (req, res) => {
		dbo.collection('PersonalData').find({}).toArray((err, results) => {
			if (err) throw err;
			res.send(results);
		})
	})

	app.post('/login', (req, res) => {
		dbo.collection('PersonalData').find({
			username: req.body.username,
			password: req.body.password
		}).toArray((err, results) => {
			if (err) throw err;
			if (results < 1) {
				return res.redirect('http://localhost:3000/signinfailed');
			} else {
				return res.redirect('http://localhost:3000/Main');
				const user_id = results[0]._id;
				console.log(user_id);
			}
		});
	});

	app.use(session({
		name: 'sid',
		resave: false,
		saveUninitialized: false,
		secret: 'ksajdvlafjov4iuovntp4utoi',
		cookie: {
			maxAge: Two_Hours,
			sameSite: true,
			secure: false,
		}
	})); 

	app.post('/formAction', (req, res) => {
		dbo.collection('PersonalData').insertOne(req.body);	
		if(req.body) {
			return res.redirect('http://localhost:3000/');
		}	
	});

	app.get('/', (req, res) => res.send('Hello backend welcome back sir!'));
	app.listen(port, () => console.log(`Example ${port}`));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../../build', 'index.html'));
	});

});