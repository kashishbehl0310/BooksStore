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

const books = [
    {
        title: "3 Mistakes of My Life",
        author: "Chetan Bhagat",
        genere: "Drama"
    },
    {
        title: "The Kite Runner",
        author: "Khaled",
        genere: "Drama"
    },
    {
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Romance"
    }
];

exports.bookController = function(req, res){
    // res.send("book");
    var data = {
        title: "Library",
        nav: [
            {title: 'Books', link: '/books'},
            {title: 'Author', link: '/author'}
        ]
    };
    (async function query(){
        var query = "SELECT * FROM books";
       await connection.query(query, function(err, rows){
            if(err){
                console.log(err);
            }
            else{
                data.books = rows;
                console.log(rows);
                console.log("results are " + data.books);
                res.render('booklist', {
                    data: data
                })
            }
        });
    }())
 
   
   
   
};
exports.SingleBookController = function(req, res){
    var id = req.params.id;
    var data = {
        title: "Library",
        nav: [
            {title: 'Books', link: '/books'},
            {title: 'Author', link: '/author'}
        ],
        book: books[id]
    };
    res.render(
        '../views/book',{
            data: data
        }
    )
}