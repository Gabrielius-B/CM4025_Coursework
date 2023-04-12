const http = require("http");

var options = {
    index: "quotes_and_budgets.html"
  };

var dir = path.join(__dirname, '../website');

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello World");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Listening on http://localhost:8000/');
});
