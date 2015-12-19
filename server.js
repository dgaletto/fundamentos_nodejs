'use strict';
var http = require('http'),
	port = process.env.port || 8080;
var server = http.createServer(function(req, res){
	console.log('server.js: Estan haciendo una peticion');
});
server.listen(port, function(){
	console.log('server.js: Inicializa el server en el puerto ' + port);
});