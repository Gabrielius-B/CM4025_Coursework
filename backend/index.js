var path = require('path');
var express = require('express');
var app = express();

var options = {
    index: "quotes_and_budgets.html"
  };

var dir = path.join(__dirname, '../frontend');