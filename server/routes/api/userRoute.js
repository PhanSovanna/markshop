'use strict';

module.exports = function(app) {
	var todoList = require('../../controllers/user');

	app.route('/api/').get(todoList.home);
	app.route('/api/users').get(todoList.getAllUsers);
	app.route('/api/users/me').get(todoList.me);
	app.route('/api/login').post(todoList.login);
	app.route('/api/register').post(todoList.register);
	// app.route('*').get(todoList.notFound);
};