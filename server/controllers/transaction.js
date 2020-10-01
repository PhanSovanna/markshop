'use strict';

var response = require('../res');
var connection = require('../configs/db');

exports.Transaction = function (req, res) {
	connection.query('SELECT * FROM `transaction`', function (err, results, fields) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json({
				status: 200,
				error: false,
				message: 'Successfully get all products data!',
				data: results
			});
		}
	});
};


exports.createTransaction = function (req, res) {
	const { user_id, total, paid, paid_change, product } = req.body;
	const date = new Date()

	if (!user_id || !total || !paid || !product) {
		res.status(300).json({
			status: 300,
			error: true,
			message: 'The values cant be null!'
		});
	} else {
		var querySale = "INSERT INTO sale(user_id, date_added, total, paid, paid_change) VALUES (?, ?,?,?,?);"

		connection.query(querySale, [user_id, date, total, paid, paid_change], function (err, results) {
			if (err) {
				console.log(err);
				res.status(400).json({
					status: 400,
					message: 'Error add new data!'
				});
			} else {
				connection.query("SELECT LAST_INSERT_ID();", function (err, results) {
					var sale_id = JSON.stringify(results[0]["LAST_INSERT_ID()"])
					var queryTransaction = "INSERT INTO transaction(product_id, qty, sale_id, date_added) VALUES(?)"
					var data = []
					product.forEach(element => {
						data.push([element.product_id, element.product_qty, sale_id, date])
					});
					connection.query(queryTransaction, data, function (err, results) {
						if (err) {
							console.log(err);
							res.status(400).json({
								status: 400,
								message: 'Error add new data!'
							});
						} else {
							res.status(200).json({
								status: 200,
								error: false,
								message: 'Successfully add new product data!',
							});
						}
					})
				})
			}
		})
	}
};


exports.Sale = function (req, res) {
	connection.query('SELECT * FROM `sale`', function (err, results, fields) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json({
				status: 200,
				error: false,
				message: 'Successfully get all products data!',
				data: results
			});
		}
	});
};


exports.createSale = function (req, res) {
	const { user_id, total, paid, paid_change } = req.body;
	const date = new Date()
	if (!user_id || !total || !paid || !paid_change) {
		res.status(300).json({
			status: 300,
			error: true,
			message: 'The values cant be null!'
		});
	} else {
		connection.query(
			'INSERT INTO sale (user_id, total, paid, paid_change, date_added) values (?, ?, ?, ?,?)',
			[user_id, total, paid, paid_change, date],
			function (err, results) {
				if (err) {
					console.log(err);
					res.status(400).json({
						status: 400,
						message: 'Error add new data!'
					});
				} else {
					res.status(200).json({
						status: 200,
						error: false,
						message: 'Successfully add new product data!',
						data: req.body
					});
				}
			}
		);
	}
};