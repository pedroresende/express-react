var express = require('express');
var router = express.Router();
var path = require("path");
var mysql = require('mysql');
var connection = require('./../lib/db.js');

router.get('/', function(req, res, next) {
  //connection.connect();

  connection.query('SELECT * FROM user;', function(err, rows, fields) {
    if (err) throw err;
    res.render('index', { title: 'test', username: rows[0].username});

  });

  //connection.end();
});

module.exports = router;
