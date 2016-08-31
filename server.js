var http = require('http');

var ip = "localhost";
var porta = "3000";

http.createServer(function (req, res){
                      res.writeHead(200, {'content-type': 'text/plain'});
                      res.end('Hello World\n');
}).listen(porta, ip);

console.log("Servidor rodando em http:/"+ ip + ": " + porta);
