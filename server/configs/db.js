require('dotenv').config();

const mysql = require('mysql');

const conn = mysql.createConnection({
	host: "sql12.freemysqlhosting.net",
	user: "sql12367842",
	password: "kfAT1mLv7H",
	database: "sql12367842"
});

module.exports = conn;