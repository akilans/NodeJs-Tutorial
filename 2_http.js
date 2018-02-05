// Create HTTP server with different options

const http = require('http');
const myModule = require('./ownModule');
var url = require('url');

/*
http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myModule.sayHello()+'<br/>');
    res.end("Hello Akilan, Welcome to Nodejs!!!")
}).listen(8000);

*/

http.createServer(function(req, res){
    const query = url.parse(req.url,true).query;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myModule.sayHello()+'<br/>');
    res.write("Welcome to Nodejs!!!"+'</br>');
    res.write("URL is - "+ req.url+'</br>'); // http://localhost:8000/anyurlname It prints anyurlname
    res.write("Name - "+ query.name + "role is - "+ query.role+'</br>'); //http://localhost:8000/?name=Akilan&role=Devops Engineer
    res.end();
}).listen(8000);