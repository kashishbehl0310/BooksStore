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
        ],
        books: books
    };
    res.render('booklist', {
        data: data
    })
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