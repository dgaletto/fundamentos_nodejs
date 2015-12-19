'use strict';
var http = require('http');
var server = http.createServer(function(req, res){
	console.log('server.js: Estan haciendo una peticion');
});
server.on('request', function(req, res){
	console.log('server.js: Estan haciendo una peticion');
});
server.listen(8080, function(){
	console.log('server.js: Inicializa el server en el puerto 8080');
});