'use strict';

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
hash = require('../../apps/user/helper').hash,
User = require('../../apps/user/model').User;

var local = (app) => {

    passport.use(new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        (username, password, done) => {
            User.findOne({ username: username }, function(err, user){
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false,{ message :
                            'El username "'+username+'" no esta registrado!' }
                    );
                }
                if (!user.validPassword(password)) {
                     return done(null, false, { message :
                         'La contraseña es incorrecta!' }
                 );
                 }
                return done(null, user);
            });
        }
    ));

    app.post('/login', passport.authenticate('local',
    {
        successRedirect : '/',
        failureRedirect : '/ingresar/',
        failureFlash : true
    }));

}

module.exports = local;
