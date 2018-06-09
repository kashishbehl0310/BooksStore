var express = require('express');
const homePageController = require('../controllers/homePageController');
const bookController = require('../controllers/bookController');

module.exports = function(app){
    app.get('/home', homePageController.homePageController);
    app.get('/books', bookController.bookController  );
    app.get('/books/:id', bookController.SingleBookController);
};

