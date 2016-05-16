var mysql = require('mysql');

/**
 * Mysql Database
 */
var connection = mysql.createConnection({
  host     : 'localhost',
  database : '',
  user     : 'root',
  password : ''
});

module.exports = connection;
