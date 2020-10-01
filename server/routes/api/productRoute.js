'use strict';

module.exports = function(app) {
	var todoList = require('../../controllers/product');
	const jwt = require('../../middleware/jwt');

	app.route('/api/').get(todoList.Index);
	app.route('/api/products').get(todoList.Products);
	app.route('/api/products/:id').get(todoList.findProducts);
	app.route('/api/searchproducts/:name').get(todoList.findProductsSearch);
	app.route('/api/productscategory/:id').get(todoList.findProductsCategory);
	app.route('/api/products').post(jwt.verifyToken, todoList.createProducts);
	app.route('/api/products/quantity/').patch(jwt.verifyToken, todoList.addReduce);
	app.route('/api/products/:id').put(jwt.verifyToken, todoList.updateProducts);
	app.route('/api/products/:id').delete(jwt.verifyToken, todoList.deleteProducts);
};
