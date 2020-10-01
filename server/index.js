
require('dotenv').config();
// express
const express = require('express')
// bodyParser for using json in express
const bodyParser = require('body-parser')
// cors for using accross ip when connect to font-end
const cors = require('cors')

// object of class express
const app = express()

// connect dependencies to express
app.use(bodyParser.json())
app.use(cors())

category_controller = require('./controllers/category')
user_controller = require('./controllers/user');
product_controller = require('./controllers/product');
transaction_controller = require('./controllers/transaction');

var user_route = require('./routes/api/userRoute');
var products_routes = require('./routes/api/productRoute');
var category_routes = require('./routes/api/categoryRoute');
var transaction_routes = require('./routes/api/transactionRoute')
// var todoList = require('./controllers/user');

transaction_routes(app)
products_routes(app);
category_routes(app);
user_route(app);

if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

// app.route('*').get(todoList.notFound);

// if we don't have config.js so it will select port 5000 default
const port = process.env.PORT || 5000;

// run express app
app.listen(port, () => console.log(`started port ${port}`))