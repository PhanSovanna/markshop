'use strict';

module.exports = function(app) {
	var todoList = require('../../controllers/transaction');
    const jwt = require('../../middleware/jwt');
	app.route('/api/transactions/').get(todoList.Transaction);
    app.route('/api/transactions/').post(jwt.verifyToken, todoList.createTransaction);
    app.route('/api/sale/').get(todoList.Sale);
    app.route('/api/sale/').post(jwt.verifyToken, todoList.createSale);
};