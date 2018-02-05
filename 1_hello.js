// First Node JS program
// Create HTTP server & Calling our own module
//Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

const http = require('http');
const myModule = require('./ownModule');

/*
http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myModule.sayHello()+'<br/>');
    res.end("Hello Akilan, Welcome to Nodejs!!!")
}).listen(8000);

*/

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myModule.sayHello()+'<br/>');
    res.write("Welcome to Nodejs!!!");
    res.write(myModule.sayHello()+'<br/>');
    res.end();
}).listen(8000);