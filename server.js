'use strict';

var express = require('express'),
		server = express(),
		port = process.env.PORT || 8080;

server.listen(port, () => {
	console.log('server.js: Escuchando en el puerto ' + port );
});

require('./routers')(server);
