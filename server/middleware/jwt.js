'use strict';
require('dotenv').config();

const jwt = require('jsonwebtoken');
const express = require('express');

module.exports.verifyToken = verifyToken;

function verifyToken(req, res, next) {
	const tokenHeader = req.headers['authorization'];

	if (typeof tokenHeader !== 'undefined') {
		const token = tokenHeader.split(' ');
		const tokenToken = token[1];

		req.token = tokenToken;

		try {
			const decoded = jwt.verify(req.token, process.env.JWT_KEY);
			if (decoded) {
				console.log(decoded);
				next();
			} else {
				throw new Error(decoded);
			}
		} catch (err) {
			console.error(err);
			res.status(403).json({
				status: 403,
				error: true,
				message: 'Your token is invalid or expired'
			});
		}
	} else {
		res.status(403).json({
			status: 403,
			error: true,
			message: 'You dont insert any token'
		});
	}
}