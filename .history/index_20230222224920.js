//get or import http 
const http = require("http");

//create server with http
const server = http.createServer((req, res)=>{
    console.log("the server is created.");
});

//initate port
const PORT = 4400;

//listen to server
server.listen(PORT,()=> console.log(`the server is running on port ${PORT}`));
