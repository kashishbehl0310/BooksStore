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