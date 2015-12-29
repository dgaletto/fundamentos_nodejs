'use strict';

var express = require('express'),
    router = express.Router();

router.route('/libro/:book_slug')

    .get(
      (req, res) =>
        res.render('book/book_detail')
    );

module.exports = router;
