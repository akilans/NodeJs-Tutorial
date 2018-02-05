const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {

    const url_name = req.url;
    const file_name = url.parse(req.url).pathname;
    console.log(url_name);
    console.log(file_name);

    fs.readFile("." + file_name, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });

}).listen(8000);