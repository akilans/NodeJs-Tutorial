const file_uploder = require("formidable");
const http = require('http');
const fs = require("fs");

http.createServer((req,res)=>{
    if(req.url == "/upload"){
        const form = new formidable.IncomingForm();
    }else{
        fs.readFile("form.html",(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("404 Not Found!!!");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
            
        })
    }
}).listen(8000);