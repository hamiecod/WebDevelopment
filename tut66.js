// creating a server
const http = require('http');
// the above module is needed to create a server
const fs = require('fs');
// fs stands for File System
const fileContent = fs.readFileSync('tut24.html');
// reading the html source file

// creating a server using http module
// req stands for request and res stands for response, both of them are self-explanatory
// request is the request by the user from the server and response is the response of the server in exchange of the request
// create server method also has a callBack function
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    // res.writeHead(200, {'Content-type':'type/x'});
    // writeHead sends a header response which is served to the client
    res.end(fileContent);
    // the end function in this method sends a signal to the server that the response has been server completely
});

// the below code is used to start/host the server
// server.listen(port, 'domain', callback);
server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80");
})
// 80 port is preffered as it is the default and you do not need to mention it in the domain in the browser