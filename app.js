const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug');
const morgan = require('morgan');
// const index = require('./app/routes/index');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// app.get('/', function (request, response){
    // response.send('hello');
    // response.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// app.use('/', index);
app.set('views', './app/views');
app.set('view engine', 'ejs');
app.listen(port, function(){
    console.log(`App listening on port ${chalk.green(port)}`);
});
require('./app/routes/index')(app); 

module.exports = app;