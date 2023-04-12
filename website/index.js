const http = require("http");
const path = require('path');

const filePath = path.join(__dirname, 'website', req.url === '/' ? 'quotes_and_budgets.html' : req.url);

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
