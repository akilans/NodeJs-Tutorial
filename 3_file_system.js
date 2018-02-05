// Create , Write, Update & delete file in Node JS

const fs = require('fs');
const http = require('http');
const url = require('url');

// Create file

fs.open('index.html', 'w', (error, file) => {
    if (error) throw error;
    console.log("File Created!!!")
});

// Write Data into that file

fs.writeFile('index.html', '<html>\
                                <head>\
                                    <title>Welcome to NodeJS</title>\
                                </head>\
                                <body>\
                                    <h1>Hello Akilan!!!, Welcome to NodeJS!!!</h1>\
                                </body>\
                                </html>', (error) => {
        if (error) throw error;
        console.log("File data wrote!!!");
    });

// Appending data into that file

fs.appendFile('index.html', '<h1>Appened Data<h1>', (error) => {
    if (error) throw error;
    console.log("File data appended!!!")
});

//Delete file
/*
fs.unlink("index.html",(err)=>{
    if (err) throw err;
});
*/

//Rename file
/*
fs.rename("index.html","index.php",(err)=>{
    if (err) throw err;
});
*/

// Read File 
http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {

        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(8000);

