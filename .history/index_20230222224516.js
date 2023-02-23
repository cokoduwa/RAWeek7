//get or import http 
const http = require("http");

//create server with http
const server = http.createServer((req, res)=>{
    console.log("server is created");
});

//initate port
const PORT = 4000;

//listen to server
server.listen(PORT,()=> console.log(`server is running on port ${PORT}`));
