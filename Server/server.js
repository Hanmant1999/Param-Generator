const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    const filetext = fs.readFileSync(path.join(__dirname, '../Client/index.html'), 'utf8');
    res.end(filetext);
});

server.listen(3000);