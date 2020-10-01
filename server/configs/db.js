require('dotenv').config();

const mysql = require('mysql');

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "test"
});

module.exports = conn;