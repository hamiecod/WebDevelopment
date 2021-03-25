const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('../tut61.html', 'utf-8');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});

server.listen(8000, ()=>{
    console.log('Server listening on port 8000');
});