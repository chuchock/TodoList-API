'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
	port: 3307,
	host: 'localhost',
	user: 'root',
	password: 'chucho',
	database: 'db_todolist'
});

connection.connect(function (err) {
	if (err) throw err;
});

module.exports = connection;