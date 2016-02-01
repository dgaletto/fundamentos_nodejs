'use strict';

var express = require('express'),
router = express.Router(),
User = require('./model').User,
hash = require('./helper').hash;

router.route('/salir/')

    .get(
        (req, res) => {
            req.logout();
            res.redirect('/');
        }
    );

router.route('/ingresar/')

    .get(
        (req, res) => {
            let context = {
                error_message: req.flash('error')[0]
            }
            res.render('user/login', context);
        }
    );

router.route('/registrar/')

    .get(
        (req, res) =>
            res.render('user/register')
    )

    .post(
        (req, res) => {

            let user = new User({
                username: req.body.username,
                password: hash(req.body.password)
            });

            user.save(
                (err) => {
                    if(err) console.log(err);
                    res.redirect('/ingresar/');
                }
            )
        }
    );


module.exports = router;
