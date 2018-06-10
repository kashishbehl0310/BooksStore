// var mysql = require('mssql');
var mysql = require('mysql');
var config = require('../../config/database_config');

var DB_Config = {
    database: config.mysql.database,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password
};

var connection = mysql.createConnection(DB_Config);
connection.connect(function(err){
    if(err){
        console.log("Error connecting to db ", err);
    }
    else{
        console.log("connected");
    }
})
// mysql.connect(DB_Config).catch(err => console.log(err));

exports.homePageController = function(req, res){
    var data = {
        title: "Library",
        nav: [
            {title: 'Books', link: '/books'},
            {title: 'Author', link: '/author'}
        ]
    };
    res.render('index', {
        data: data
    });
}