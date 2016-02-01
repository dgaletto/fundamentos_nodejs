'use strict';

var middlewares = {

    isLoggedIn : (req, res, next) =>
    {
        if (req.user) {
            next();
            return;
        }

        res.redirect('/');
    }

}

module.exports = middlewares;
