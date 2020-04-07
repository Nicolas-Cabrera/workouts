const express = require('express');
//require('dotenv').config();
const db = require('./dbconnection');
var ObjectId = require('mongodb').ObjectID;
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

//Authentication packages
const session = require('express-session');

// const url = process.env.NODE_ENV === 'production' ?
// 	'localhost:3000' : 
// 	'recordworkout.herokuapp.com';

app.use(express.urlencoded());
app.use(express.json());

app.use(session({
	secret: 'asdsds',
	name: 'Session-test',
	resave: false,
	saveUninitialized: false,
	cookie: {
		//maxAge:5000,
		sameSite: true,
	}
}));

db.connect().then(dbo => {

	app.use(express.static(path.join(__dirname, '../../build')));

	app.get('/', (req, res) => {
		res.send('Hello welcome to the backend of this app');
	});

	app.post('/login', (req, res, next) => {
		dbo.collection('PersonalData').find({
			username: req.body.username,
			password: req.body.password
		}).toArray((err, results) => {
			if (err) throw err;
			if (results < 1) {
				return res.redirect(`http://localhost:3000/signinfailed`);
			} else {
				req.session.userId = results[0]._id;
				return res.redirect(`http://localhost:3000/Main`);
			}
		});
	});

	app.get('/current', (req, res) => {
		//res.send(req.session.userId);
		//let userId = new ObjectId("5e7cd4ec599a750c48d06c25");
		dbo.collection('PersonalData').find({
			"_id": ObjectId(req.session.userId)
		}).toArray((err, results) =>{
			if(err) throw err;
			res.send(results);
			//console.log(results);
		});
	});

	app.post('/formAction', (req, res) => {
		dbo.collection('PersonalData').insertOne(req.body);	
		if(req.body) {
			return res.redirect(`http://localhost:3000/`);
		}	
	});

	app.get('/test', (req, res) => {
		if(req.session.userId) {
			res.send({
				message: 'yes'
			});
		}  else {
			res.send({
				message: 'no'
			})
		}
	});

	app.post('/logout', (req, res) => {
		req.session.destroy(err => {
			if(err) {
				console.log('There was an error trying to logout');
			} 
			res.clearCookie('Session-test');
			return res.redirect(`http://localhost:3000`);
		});
	});

	app.get('/', (req, res) => res.send('Hello backend welcome back sir!'));
	app.listen(port, () => console.log(`Example ${port}`));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../../build', 'index.html'));
	});
});