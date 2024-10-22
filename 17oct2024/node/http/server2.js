//importar http de node
const http = require('http');
//puerto en el que va a correr
const port = 5008;
//crear servidor
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Name N.C');

});

server.listen(port,()=>{
    console.log('el servidor esta funcionando en ')

});

