'use strict';

var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    path = require('path'),
    slug = require('slug'),
    fs = require('fs'),
    Book = require('../book/model').Book;

router.route('/admin/')

    .get(
      (req, res) =>
        res.render('admin/index.html')
    );

router.route('/admin/crear-libro/')

    .get(
      (req, res) =>
        res.render('admin/book_create.html')
    )
    .post(
        (req, res) => {
            let form = new formidable.IncomingForm();
            let path_file = path.join(__dirname, '..', '..', 'public', 'media', 'books');

            form.uploadDir = path_file;

            form.on('file', function(field, file) {
                fs.rename(file.path, form.uploadDir + "/" + file.name);
            });

            form.parse(req, (err, fields, files) => {
                let book = new Book({
                    title: fields.title,
                    slug: slug(fields.title.toLowerCase()),
                    author: fields.author,
                    summary: fields.summary,
                    image: req.MEDIA_URL + '/books/' + files.image.name
                });
                book.save(
                    (err) =>{
                        if(err) console.log(err);
                        res.redirect('/admin/crear-libro/');
                });
            });
        }
    )

module.exports = router;
