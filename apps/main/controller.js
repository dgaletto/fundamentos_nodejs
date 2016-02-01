'use strict';

var express = require('express'),
    router = express.Router(),
    Book = require('../book/model').Book;


router.route('/')

    .get(
      (req, res) => {
          Book.find({}, (err, books) => {
                  if(err) console.log(err);

                  let bookMap = {};

                   books.forEach(function(book) {
                       bookMap[book._id] = book;
                   });

                   res.render('main/index', {books: bookMap});
              }
          );

      }
    );


module.exports = router;
