"use strict";

var _express = _interopRequireDefault(require("express"));

var _colors = _interopRequireDefault(require("colors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _products = _interopRequireDefault(require("./data/products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

(0, _db["default"])();
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('API is running');
});
app.get('/api/products', function (req, res) {
  res.json(_products["default"]);
});
app.get('/api/products/:id', function (req, res) {
  var product = _products["default"].find(function (p) {
    return p._id === req.params.id;
  });

  res.json(product);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server running in ".concat(process.env.NODE_ENV, " mode on PORT ").concat(PORT).yellow.bold);
});