require('dotenv').config();

const mysql = require('mysql');

const conn = mysql.createConnection({
	host: "db4free.net",
	user: "bootcampteamone",
	password: "Iamn'tg0d9899",
	database: "bootcampteamone"
});

module.exports = conn;