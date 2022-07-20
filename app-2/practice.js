//import module

// Recall that you must use require with a file that has a .js extension and you can use import with a file that has a .mjs extension

const http = require('http')

// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
    res.end('Hello World');
});
  
// Call the server's listen() method with the port number 3001.
server.listen(3001,() => {
    console.log("Server is running!");
}); 
   