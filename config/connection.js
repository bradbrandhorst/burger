var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',
    password: 'root',
    database: 'burgers_db'
});

console.log("In connection");
connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;