'use strict';

module.exports = function(app) {
	var todoList = require('../../controllers/category');
	const jwt = require('../../middleware/jwt');

	app.route('/api/category').get(todoList.Category);

	app.route('/api/category/:id').get(todoList.findCategory);

	app.route('/api/category').post(jwt.verifyToken, todoList.createCategory);

	app.route('/api/category/:id').put(jwt.verifyToken, todoList.updateCategory);

	app.route('/api/category/:id').delete(jwt.verifyToken, todoList.deleteCategory);
};