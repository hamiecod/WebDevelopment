const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port= 80;

const home = fs.readFileSync('index.html','utf8');
const about = fs.readFileSync('about.html','utf8');
const services = fs.readFileSync('services.html','utf8');
const contact = fs.readFileSync('contact.html','utf8');

const server = http.createServer((req, res)=>{
    let url = req.url;
    console.log(url);
    res.statusCode= 200;
    res.setHeader('Content-type','text/html');
    if(url == '/' || url == '/home'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode= 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server listening at http://${hostname}:${port}/`);
})
