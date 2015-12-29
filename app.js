'use strict';

var express = require('express'),
		app = express(),
		swig = require('swig'),
		port = process.env.PORT || 8080;


// TEMPLATES
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.listen(port, () =>
		console.log('server.js: Escuchando en el puerto ' + port )
);

require('./routers')(app);
