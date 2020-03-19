const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://nico:Nico1216@workout-2530w.mongodb.net/test?retryWrites=true&w=majority";
const dbName = 'Workout';

module.exports = function connect() {
	return new Promise((resolve) => {
		MongoClient.connect(url, { useNewUrlParser: true }, function(err, mongoDB) {
			if(err) throw err;
			const dbo = mongoDB.db(dbName);
			resolve(dbo);
		});
	});
}