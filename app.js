'use strict';

var express = require('express'),
	app = express(),
	session = require('express-session'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	swig = require('swig'),
	flash = require('connect-flash'),
	RedisStore = require('connect-redis')(session),
	port = process.env.PORT || 8080;


app.use(flash());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Sessiones, cookies y passport
app.use(cookieParser());
app.use(session({
	store: new RedisStore({
		host: '127.0.0.1',
		port: 6379,
		db: 1
	}),
	secret: 'manola',
	resave: false,
	saveUninitialized: true
}));
require('./config/passport')(app);

// Middlewares
app.use((req, res, next) => {
	app.locals.user = req.user;
	next();
});

// TEMPLATES
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

// STATIC FILES
app.use(express.static(__dirname + '/public'));
// MEDIA FILES
app.use((req, res, next) => {
	req.MEDIA_URL = 'http://localhost:8080/media';
	next();
});

app.listen(port, () =>
		console.log('server.js: Escuchando en el puerto ' + port )
);

require('./routers')(app);
