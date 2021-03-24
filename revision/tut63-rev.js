// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more styling</title>
      <link rel="stylesheet" href="tut22.css">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');

body{
    font-family: 'Amatic SC', cursive;
}

.container{
    border: 2px solid rgb(241, 107, 107);
    background-color: rgb(214, 255, 241);
    width: 666px;     
    margin: 34px auto; 
    padding: 34px; 
}

a{
    text-decoration: none;/*removes the underline function*/
}

a:hover/*when the curson points on the anchor tag*/{
    font-weight: bold;
    background-color: gold;
    color: hotpink;
}

button:hover{
    font-weight: bold;
    background-color: gold;
    color: hotpink;
}

a:visited/*if the link is visited*/{
    background-color: lawngreen;
    /* font-weight: bold; */
}

a:active{
    /*it has the same properties as of the a tag*/
}

button:visited/*if the link is visited*/{
    /* font-weight: bold; */
    background-color: lawngreen;
}

.btn{
    font-family: 'Amatic SC', cursive;/*this is defined again because buttons do not usually take fonts*/
    background-color: rgb(204, 204, 253);
    padding: 6px;
    border: none;/*disappears all the borders... this is done here to make the href and button identical*/
    cursor: pointer;/*changes the cursor when it is hovered over a particular element*/
    font-size: 13px;
    border-radius: 4px;
}
    </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is a heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quia consequuntur veritatis vitae aperiam inventore dolorum. Nemo tempora provident molestias nam, illo asperiores harum perferendis maxime quod porro ut nobis nostrum minus eaque. Illo.</p>
          <a href="https://google.com" target="_blank" class="btn">Read More</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});