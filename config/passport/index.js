'use strict';

var passport = require('passport');

var passportConfig = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));

    passport.deserializeUser((user, done) => done(null, user));

    require('./local')(app);
}

module.exports = passportConfig;
