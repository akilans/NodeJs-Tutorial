const file_uploder = require('formidable');
const http = require('http');
const fs = require("fs");

http.createServer((req,res)=>{
    if(req.url == "/upload"){
        var form = new file_uploder.IncomingForm();
        form.parse(req, function (err, fields, files) {
           console.log(fields);
           console.log(files);

           const old_path = files.profile_picture.path;
           const new_path = files.profile_picture.name;

            fs.rename(old_path,new_path,(error)=>{
                if(error){
                    throw error;
                }else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write("File Uploded successfully");
                    res.end();
                }
            });

        })
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