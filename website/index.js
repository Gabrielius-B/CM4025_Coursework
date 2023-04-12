const path = require('path');
const express = require('express');
const app = express();

const options = {
    index: "quotes_and_budgets.html"
  };

const dir = path.join(__dirname, '../website');

app.get('/api', function(req, res){
    res.send("Yes we have an API now")
});

app.use(express.static(dir, options));

// 404 page
app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(8000, function () {
    console.log('Listening on http://localhost:8000/');
});

